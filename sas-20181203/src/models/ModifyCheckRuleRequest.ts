// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyCheckRuleRequestAddInstanceList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-wz9g8ljygfqs1ez3****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCheckRuleRequestDeleteInstanceList extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-8vb0e8qdaj0yyxjo****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the asset.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyCheckRuleRequest extends $dara.Model {
  /**
   * @remarks
   * The list of instances to add in this rule update. If no instances need to be added, you do not need to specify this parameter.
   */
  addInstanceList?: ModifyCheckRuleRequestAddInstanceList[];
  /**
   * @remarks
   * The list of instances to delete in this rule update. If no instances need to be deleted, you do not need to specify this parameter.
   */
  deleteInstanceList?: ModifyCheckRuleRequestDeleteInstanceList[];
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * testRemark
   */
  remark?: string;
  /**
   * @remarks
   * The rule ID.
   * > You can call the [ListCheckRule](https://help.aliyun.com/document_detail/2590599.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 9000**
   */
  ruleId?: number;
  /**
   * @remarks
   * The rule type. Default value: **WHITE**. Valid values:
   * - **WHITE**: whitelist.
   * 
   * @example
   * WHITE
   */
  ruleType?: string;
  /**
   * @remarks
   * The scope of the rule. Valid values:
   * - **INSTNACE**: instance
   * - **ITEM**: check item.
   * 
   * @example
   * INSTANCE
   */
  scopeType?: string;
  static names(): { [key: string]: string } {
    return {
      addInstanceList: 'AddInstanceList',
      deleteInstanceList: 'DeleteInstanceList',
      remark: 'Remark',
      ruleId: 'RuleId',
      ruleType: 'RuleType',
      scopeType: 'ScopeType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addInstanceList: { 'type': 'array', 'itemType': ModifyCheckRuleRequestAddInstanceList },
      deleteInstanceList: { 'type': 'array', 'itemType': ModifyCheckRuleRequestDeleteInstanceList },
      remark: 'string',
      ruleId: 'number',
      ruleType: 'string',
      scopeType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.addInstanceList)) {
      $dara.Model.validateArray(this.addInstanceList);
    }
    if(Array.isArray(this.deleteInstanceList)) {
      $dara.Model.validateArray(this.deleteInstanceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

