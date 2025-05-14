// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EditQualityRuleTagRequestAnalysisTypes } from "./EditQualityRuleTagRequestAnalysisTypes";


export class EditQualityRuleTagRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  analysisTypes?: EditQualityRuleTagRequestAnalysisTypes[];
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      analysisTypes: 'AnalysisTypes',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      analysisTypes: { 'type': 'array', 'itemType': EditQualityRuleTagRequestAnalysisTypes },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.analysisTypes)) {
      $dara.Model.validateArray(this.analysisTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

