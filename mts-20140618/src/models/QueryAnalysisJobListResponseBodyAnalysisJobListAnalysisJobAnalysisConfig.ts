// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControl } from "./QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControl";
import { QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigQualityControl } from "./QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigQualityControl";


export class QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfig extends $dara.Model {
  /**
   * @remarks
   * The control on the attributes of the job output.
   */
  propertiesControl?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControl;
  /**
   * @remarks
   * The quality control on the job output.
   */
  qualityControl?: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigQualityControl;
  static names(): { [key: string]: string } {
    return {
      propertiesControl: 'PropertiesControl',
      qualityControl: 'QualityControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      propertiesControl: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigPropertiesControl,
      qualityControl: QueryAnalysisJobListResponseBodyAnalysisJobListAnalysisJobAnalysisConfigQualityControl,
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

