// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageInsightsConfig } from "./ImageInsightsConfig";
import { VideoInsightsConfig } from "./VideoInsightsConfig";


export class InsightsConfig extends $dara.Model {
  image?: ImageInsightsConfig;
  /**
   * @remarks
   * The language of the source content.
   * 
   * @example
   * zh-Hans
   */
  language?: string;
  video?: VideoInsightsConfig;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      language: 'Language',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: ImageInsightsConfig,
      language: 'string',
      video: VideoInsightsConfig,
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

