// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoInsightsCaptionConfig } from "./VideoInsightsCaptionConfig";
import { VideoInsightsLabelConfig } from "./VideoInsightsLabelConfig";
import { VideoInsightsMultiStreamConfig } from "./VideoInsightsMultiStreamConfig";


export class VideoInsightsConfig extends $dara.Model {
  /**
   * @remarks
   * The video synopsis configuration.
   */
  caption?: VideoInsightsCaptionConfig;
  label?: VideoInsightsLabelConfig;
  multiStream?: VideoInsightsMultiStreamConfig;
  static names(): { [key: string]: string } {
    return {
      caption: 'Caption',
      label: 'Label',
      multiStream: 'MultiStream',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caption: VideoInsightsCaptionConfig,
      label: VideoInsightsLabelConfig,
      multiStream: VideoInsightsMultiStreamConfig,
    };
  }

  validate() {
    if(this.caption && typeof (this.caption as any).validate === 'function') {
      (this.caption as any).validate();
    }
    if(this.label && typeof (this.label as any).validate === 'function') {
      (this.label as any).validate();
    }
    if(this.multiStream && typeof (this.multiStream as any).validate === 'function') {
      (this.multiStream as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

