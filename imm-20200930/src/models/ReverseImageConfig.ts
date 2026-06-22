// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageReverseImageConfig } from "./ImageReverseImageConfig";
import { VideoReverseImageConfig } from "./VideoReverseImageConfig";


export class ReverseImageConfig extends $dara.Model {
  image?: ImageReverseImageConfig;
  video?: VideoReverseImageConfig;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: ImageReverseImageConfig,
      video: VideoReverseImageConfig,
    };
  }

  validate() {
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

