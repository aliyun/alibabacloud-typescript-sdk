// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ImageInsightsCaptionConfig } from "./ImageInsightsCaptionConfig";


export class ImageInsightsConfig extends $dara.Model {
  caption?: ImageInsightsCaptionConfig;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: ImageInsightsCaptionConfig,
    };
  }

  validate() {
    if(this.caption && typeof (this.caption as any).validate === 'function') {
      (this.caption as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

