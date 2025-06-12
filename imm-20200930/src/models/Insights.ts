// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageInsight } from "./ImageInsight";
import { VideoInsight } from "./VideoInsight";


export class Insights extends $dara.Model {
  /**
   * **if can be null:**
   * true
   */
  image?: ImageInsight;
  /**
   * **if can be null:**
   * true
   */
  video?: VideoInsight;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: ImageInsight,
      video: VideoInsight,
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

