// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecurityClassifyRequestUpdateCommandAdvancedConditionListOptionList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * k1
   */
  key?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * v1
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityClassifyRequestUpdateCommandAdvancedConditionList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 234
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * AND
   */
  operate?: string;
  optionList?: UpdateSecurityClassifyRequestUpdateCommandAdvancedConditionListOptionList[];
  /**
   * @example
   * 123
   */
  parentId?: string;
  /**
   * @example
   * TABLE_NAME
   */
  property?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * EXPRESSION
   */
  relation?: string;
  valueList?: string[];
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      operate: 'Operate',
      optionList: 'OptionList',
      parentId: 'ParentId',
      property: 'Property',
      relation: 'Relation',
      valueList: 'ValueList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      operate: 'string',
      optionList: { 'type': 'array', 'itemType': UpdateSecurityClassifyRequestUpdateCommandAdvancedConditionListOptionList },
      parentId: 'string',
      property: 'string',
      relation: 'string',
      valueList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.optionList)) {
      $dara.Model.validateArray(this.optionList);
    }
    if(Array.isArray(this.valueList)) {
      $dara.Model.validateArray(this.valueList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityClassifyRequestUpdateCommand extends $dara.Model {
  /**
   * @example
   * test
   */
  abbreviation?: string;
  advancedConditionList?: UpdateSecurityClassifyRequestUpdateCommandAdvancedConditionList[];
  /**
   * @example
   * test
   */
  description?: string;
  featureNameList?: string[];
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * L2
   */
  levelName?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * /a/b/
   */
  parentPath?: string;
  /**
   * @example
   * 5
   */
  priority?: number;
  /**
   * @example
   * ENABLE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      abbreviation: 'Abbreviation',
      advancedConditionList: 'AdvancedConditionList',
      description: 'Description',
      featureNameList: 'FeatureNameList',
      id: 'Id',
      levelName: 'LevelName',
      name: 'Name',
      parentPath: 'ParentPath',
      priority: 'Priority',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abbreviation: 'string',
      advancedConditionList: { 'type': 'array', 'itemType': UpdateSecurityClassifyRequestUpdateCommandAdvancedConditionList },
      description: 'string',
      featureNameList: { 'type': 'array', 'itemType': 'string' },
      id: 'number',
      levelName: 'string',
      name: 'string',
      parentPath: 'string',
      priority: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.advancedConditionList)) {
      $dara.Model.validateArray(this.advancedConditionList);
    }
    if(Array.isArray(this.featureNameList)) {
      $dara.Model.validateArray(this.featureNameList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSecurityClassifyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  updateCommand?: UpdateSecurityClassifyRequestUpdateCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      updateCommand: 'UpdateCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      updateCommand: UpdateSecurityClassifyRequestUpdateCommand,
    };
  }

  validate() {
    if(this.updateCommand && typeof (this.updateCommand as any).validate === 'function') {
      (this.updateCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

