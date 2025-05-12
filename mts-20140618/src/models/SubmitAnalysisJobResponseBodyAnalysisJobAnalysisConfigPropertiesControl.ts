// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControlCrop } from "./SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControlCrop";


export class SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControl extends $dara.Model {
  /**
   * @remarks
   * The cropping configurations of video images.
   */
  crop?: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControlCrop;
  /**
   * @remarks
   * Indicates whether deinterlacing was forced to run. Valid values:
   * 
   * *   **Auto**: Deinterlacing was automatically run.
   * *   **Force**: Deinterlacing was forced to run.
   * *   **None**: Deinterlacing was forced not to run.
   * 
   * @example
   * Force
   */
  deinterlace?: string;
  static names(): { [key: string]: string } {
    return {
      crop: 'Crop',
      deinterlace: 'Deinterlace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crop: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControlCrop,
      deinterlace: 'string',
    };
  }

  validate() {
    if(this.crop && typeof (this.crop as any).validate === 'function') {
      (this.crop as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

