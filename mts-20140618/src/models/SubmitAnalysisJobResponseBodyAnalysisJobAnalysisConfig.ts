// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControl } from "./SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControl";
import { SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigQualityControl } from "./SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigQualityControl";


export class SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfig extends $dara.Model {
  /**
   * @remarks
   * The control on the attributes of the job output.
   */
  propertiesControl?: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControl;
  /**
   * @remarks
   * The quality control on the job output.
   */
  qualityControl?: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigQualityControl;
  static names(): { [key: string]: string } {
    return {
      propertiesControl: 'PropertiesControl',
      qualityControl: 'QualityControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertiesControl: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigPropertiesControl,
      qualityControl: SubmitAnalysisJobResponseBodyAnalysisJobAnalysisConfigQualityControl,
    };
  }

  validate() {
    if(this.propertiesControl && typeof (this.propertiesControl as any).validate === 'function') {
      (this.propertiesControl as any).validate();
    }
    if(this.qualityControl && typeof (this.qualityControl as any).validate === 'function') {
      (this.qualityControl as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

