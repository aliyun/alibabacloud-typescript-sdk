// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EditQualityRuleTagRequestAnalysisTypes extends $dara.Model {
  /**
   * @remarks
   * The ID of the rule tag. Default value: null.
   * 
   * @example
   * 123456
   */
  id?: number;
  /**
   * @remarks
   * The name of the rule tag.
   * 
   * @example
   * 639
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class EditQualityRuleTagRequest extends $dara.Model {
  /**
   * @remarks
   * The parsing types.
   * 
   * This parameter is required.
   */
  analysisTypes?: EditQualityRuleTagRequestAnalysisTypes[];
  /**
   * @remarks
   * Instance ID of the AICCS instance. You can obtain instance ID from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
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

