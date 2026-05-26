// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoInsightsCaptionConfig } from "./VideoInsightsCaptionConfig";


export class VideoInsightsConfig extends $dara.Model {
  caption?: VideoInsightsCaptionConfig;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: VideoInsightsCaptionConfig,
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

