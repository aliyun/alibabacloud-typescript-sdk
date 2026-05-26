// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoInsightsConfig } from "./VideoInsightsConfig";


export class InsightsConfig extends $dara.Model {
  /**
   * @example
   * zh-Hans
   */
  language?: string;
  video?: VideoInsightsConfig;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      video: 'Video',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      video: VideoInsightsConfig,
    };
  }

  validate() {
    if(this.video && typeof (this.video as any).validate === 'function') {
      (this.video as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

