// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VideoInsightsHighlightLabelConfig } from "./VideoInsightsHighlightLabelConfig";
import { VideoInsightsSystemLabelConfig } from "./VideoInsightsSystemLabelConfig";
import { VideoInsightsUserDefinedLabelConfig } from "./VideoInsightsUserDefinedLabelConfig";


export class VideoInsightsLabelConfig extends $dara.Model {
  highlight?: VideoInsightsHighlightLabelConfig;
  system?: VideoInsightsSystemLabelConfig;
  userDefined?: VideoInsightsUserDefinedLabelConfig;
  static names(): { [key: string]: string } {
    return {
      highlight: 'Highlight',
      system: 'System',
      userDefined: 'UserDefined',
    };
  }

  static types(): { [key: string]: any } {
    return {
      highlight: VideoInsightsHighlightLabelConfig,
      system: VideoInsightsSystemLabelConfig,
      userDefined: VideoInsightsUserDefinedLabelConfig,
    };
  }

  validate() {
    if(this.highlight && typeof (this.highlight as any).validate === 'function') {
      (this.highlight as any).validate();
    }
    if(this.system && typeof (this.system as any).validate === 'function') {
      (this.system as any).validate();
    }
    if(this.userDefined && typeof (this.userDefined as any).validate === 'function') {
      (this.userDefined as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

