// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DsgDesensPlanAddOrUpdateRequestDesensRulesDesensPlan extends $dara.Model {
  /**
   * @remarks
   * The masking method configured in the data masking rule. Valid values:
   * 
   * *   hash
   * *   mapping
   * *   mask
   * *   charreplacement
   * *   intervalselect
   * *   decimalpoint
   * *   emptydesens
   * 
   * This parameter is required.
   * 
   * @example
   * hash
   */
  desensPlanType?: string;
  /**
   * @remarks
   * The parameters for the data masking rule.
   */
  extParam?: { [key: string]: any };
  static names(): { [key: string]: string } {
    return {
      desensPlanType: 'DesensPlanType',
      extParam: 'ExtParam',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desensPlanType: 'string',
      extParam: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
    };
  }

  validate() {
    if(this.extParam) {
      $dara.Model.validateMap(this.extParam);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgDesensPlanAddOrUpdateRequestDesensRules extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to add a watermark. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  checkWatermark?: boolean;
  /**
   * @remarks
   * The sensitive field type.
   * 
   * This parameter is required.
   * 
   * @example
   * phone
   */
  dataType?: string;
  /**
   * @remarks
   * The data masking rule.
   * 
   * This parameter is required.
   */
  desensPlan?: DsgDesensPlanAddOrUpdateRequestDesensRulesDesensPlan;
  /**
   * @remarks
   * The ID of the data masking rule. You can call the [DsgDesensPlanQueryList](https://help.aliyun.com/document_detail/2786578.html) operation to query the ID of the data masking rule.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The owner of the data masking rule.
   * 
   * This parameter is required.
   * 
   * @example
   * test_user
   */
  owner?: string;
  /**
   * @remarks
   * The name of the data masking rule.
   * 
   * This parameter is required.
   * 
   * @example
   * phone_hash
   */
  ruleName?: string;
  /**
   * @remarks
   * The level-2 data masking scenario.
   * 
   * This parameter is required.
   */
  sceneIds?: number[];
  /**
   * @remarks
   * The status of the data masking rule. Valid values:
   * 
   * *   0: expired
   * *   1: effective
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      checkWatermark: 'CheckWatermark',
      dataType: 'DataType',
      desensPlan: 'DesensPlan',
      id: 'Id',
      owner: 'Owner',
      ruleName: 'RuleName',
      sceneIds: 'SceneIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkWatermark: 'boolean',
      dataType: 'string',
      desensPlan: DsgDesensPlanAddOrUpdateRequestDesensRulesDesensPlan,
      id: 'number',
      owner: 'string',
      ruleName: 'string',
      sceneIds: { 'type': 'array', 'itemType': 'number' },
      status: 'number',
    };
  }

  validate() {
    if(this.desensPlan && typeof (this.desensPlan as any).validate === 'function') {
      (this.desensPlan as any).validate();
    }
    if(Array.isArray(this.sceneIds)) {
      $dara.Model.validateArray(this.sceneIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DsgDesensPlanAddOrUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * A collection of data masking rules that you want to add or modify.
   * 
   * This parameter is required.
   */
  desensRules?: DsgDesensPlanAddOrUpdateRequestDesensRules[];
  static names(): { [key: string]: string } {
    return {
      desensRules: 'DesensRules',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desensRules: { 'type': 'array', 'itemType': DsgDesensPlanAddOrUpdateRequestDesensRules },
    };
  }

  validate() {
    if(Array.isArray(this.desensRules)) {
      $dara.Model.validateArray(this.desensRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

