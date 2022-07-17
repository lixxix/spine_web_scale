
module spine {

    export class SpineScaler {
        scale: number = 1.0;

        readJosnScale(json_data: string, atlas_data: string): number {
            let atlas = new TextureAtlas(atlas_data, (xx) => { console.log(xx) })
            let json = new SkeletonJson(null);
            let first: boolean = true
            json.readSkeletonData(json_data)
            for (let key in atlas.text_config) {
                if (json.text_config[key]) {
                    let scale_w = atlas.text_config[key].width / json.text_config[key].width
                    let scale_h = atlas.text_config[key].height / json.text_config[key].height
                    if (first == true) {
                        first = false
                        this.scale = scale_w
                    }
                    if (scale_h == scale_w) {
                        this.scale = scale_h;
                        return this.scale;
                    }
                }
            }
            return this.scale;
        }

        readSkelScale(skel_data: Uint8Array, atlas_data: string): number {
            let atlas = new TextureAtlas(atlas_data, (xx) => { console.log(xx) })
            let skel = new SkeletonBinary(null)
            skel.readSkeletonData(skel_data)
            let first: boolean = true
            for (let key in atlas.text_config) {
                if (skel.text_config[key]) {
                    let scale_w = atlas.text_config[key].width / skel.text_config[key].width
                    let scale_h = atlas.text_config[key].height / skel.text_config[key].height
                    if (first == true) {
                        first = false
                        this.scale = scale_w
                    }
                    if (scale_h == scale_w) {
                        this.scale = scale_h;
                        return this.scale;
                    }
                }
            }
            return this.scale
        }
    }
}