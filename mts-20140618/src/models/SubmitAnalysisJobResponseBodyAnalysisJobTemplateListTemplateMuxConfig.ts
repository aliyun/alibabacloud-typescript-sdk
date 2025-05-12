// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigGif } from "./SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigGif";
import { SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigSegment } from "./SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigSegment";


export class SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfig extends $dara.Model {
  /**
   * @remarks
   * The transmuxing configurations for the GIF format.
   */
  gif?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigGif;
  /**
   * @remarks
   * The segment configurations.
   */
  segment?: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigSegment;
  static names(): { [key: string]: string } {
    return {
      gif: 'Gif',
      segment: 'Segment',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gif: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigGif,
      segment: SubmitAnalysisJobResponseBodyAnalysisJobTemplateListTemplateMuxConfigSegment,
    };
  }

  validate() {
    if(this.gif && typeof (this.gif as any).validate === 'function') {
      (this.gif as any).validate();
    }
    if(this.segment && typeof (this.segment as any).validate === 'function') {
      (this.segment as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

