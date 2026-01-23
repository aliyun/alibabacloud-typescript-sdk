// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityClassifyRequestCreateCommandAdvancedConditionListOptionList extends $dara.Model {
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

export class CreateSecurityClassifyRequestCreateCommandAdvancedConditionList extends $dara.Model {
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
  optionList?: CreateSecurityClassifyRequestCreateCommandAdvancedConditionListOptionList[];
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
      optionList: { 'type': 'array', 'itemType': CreateSecurityClassifyRequestCreateCommandAdvancedConditionListOptionList },
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

export class CreateSecurityClassifyRequestCreateCommand extends $dara.Model {
  /**
   * @example
   * test
   */
  abbreviation?: string;
  advancedConditionList?: CreateSecurityClassifyRequestCreateCommandAdvancedConditionList[];
  /**
   * @example
   * test
   */
  description?: string;
  featureNameList?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * L2
   */
  levelName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * /
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
      advancedConditionList: { 'type': 'array', 'itemType': CreateSecurityClassifyRequestCreateCommandAdvancedConditionList },
      description: 'string',
      featureNameList: { 'type': 'array', 'itemType': 'string' },
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

export class CreateSecurityClassifyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  createCommand?: CreateSecurityClassifyRequestCreateCommand;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      createCommand: 'CreateCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createCommand: CreateSecurityClassifyRequestCreateCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.createCommand && typeof (this.createCommand as any).validate === 'function') {
      (this.createCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

