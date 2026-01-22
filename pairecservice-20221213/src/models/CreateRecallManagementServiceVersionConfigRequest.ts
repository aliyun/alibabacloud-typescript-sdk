// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecallManagementServiceVersionConfigRequestMergeConfig extends $dara.Model {
  /**
   * @example
   * ""
   */
  extendedConfig?: string;
  /**
   * @example
   * age>20
   */
  filterExpression?: string;
  filterRecallManagementTableIds?: string[];
  /**
   * @example
   * 2
   */
  itemRecallManagementTableId?: string;
  itemTableFields?: string[];
  /**
   * @example
   * Weight
   */
  mergeType?: string;
  /**
   * @example
   * 1
   */
  recallManagementServiceVersionConfigId?: string;
  static names(): { [key: string]: string } {
    return {
      extendedConfig: 'ExtendedConfig',
      filterExpression: 'FilterExpression',
      filterRecallManagementTableIds: 'FilterRecallManagementTableIds',
      itemRecallManagementTableId: 'ItemRecallManagementTableId',
      itemTableFields: 'ItemTableFields',
      mergeType: 'MergeType',
      recallManagementServiceVersionConfigId: 'RecallManagementServiceVersionConfigId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extendedConfig: 'string',
      filterExpression: 'string',
      filterRecallManagementTableIds: { 'type': 'array', 'itemType': 'string' },
      itemRecallManagementTableId: 'string',
      itemTableFields: { 'type': 'array', 'itemType': 'string' },
      mergeType: 'string',
      recallManagementServiceVersionConfigId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filterRecallManagementTableIds)) {
      $dara.Model.validateArray(this.filterRecallManagementTableIds);
    }
    if(Array.isArray(this.itemTableFields)) {
      $dara.Model.validateArray(this.itemTableFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFeatureConfig extends $dara.Model {
  /**
   * @example
   * category=3
   */
  expression?: string;
  /**
   * @example
   * city
   */
  name?: string;
  /**
   * @example
   * string
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
      name: 'Name',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
      name: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFilterConfig extends $dara.Model {
  /**
   * @example
   * age>20
   */
  experession?: string;
  static names(): { [key: string]: string } {
    return {
      experession: 'Experession',
    };
  }

  static types(): { [key: string]: any } {
    return {
      experession: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsJoinConfig extends $dara.Model {
  /**
   * @example
   * item_id
   */
  field?: string;
  outputFields?: string[];
  /**
   * @example
   * 3
   */
  recallManagementTableId?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      outputFields: 'OutputFields',
      recallManagementTableId: 'RecallManagementTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      outputFields: { 'type': 'array', 'itemType': 'string' },
      recallManagementTableId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.outputFields)) {
      $dara.Model.validateArray(this.outputFields);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsTriggerConfig extends $dara.Model {
  /**
   * @example
   * user_id
   */
  field?: string;
  /**
   * @example
   * 20
   */
  fieldQuantityLimit?: string;
  /**
   * @example
   * false
   */
  isRandSort?: string;
  /**
   * @example
   * create_time
   */
  sortField?: string;
  static names(): { [key: string]: string } {
    return {
      field: 'Field',
      fieldQuantityLimit: 'FieldQuantityLimit',
      isRandSort: 'IsRandSort',
      sortField: 'SortField',
    };
  }

  static types(): { [key: string]: any } {
    return {
      field: 'string',
      fieldQuantityLimit: 'string',
      isRandSort: 'string',
      sortField: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecallManagementServiceVersionConfigRequestRecallConfigOperators extends $dara.Model {
  featureConfig?: CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFeatureConfig;
  filterConfig?: CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFilterConfig;
  joinConfig?: CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsJoinConfig;
  /**
   * @example
   * Filter
   */
  operatorType?: string;
  triggerConfig?: CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      featureConfig: 'FeatureConfig',
      filterConfig: 'FilterConfig',
      joinConfig: 'JoinConfig',
      operatorType: 'OperatorType',
      triggerConfig: 'TriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConfig: CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFeatureConfig,
      filterConfig: CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFilterConfig,
      joinConfig: CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsJoinConfig,
      operatorType: 'string',
      triggerConfig: CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsTriggerConfig,
    };
  }

  validate() {
    if(this.featureConfig && typeof (this.featureConfig as any).validate === 'function') {
      (this.featureConfig as any).validate();
    }
    if(this.filterConfig && typeof (this.filterConfig as any).validate === 'function') {
      (this.filterConfig as any).validate();
    }
    if(this.joinConfig && typeof (this.joinConfig as any).validate === 'function') {
      (this.joinConfig as any).validate();
    }
    if(this.triggerConfig && typeof (this.triggerConfig as any).validate === 'function') {
      (this.triggerConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecallManagementServiceVersionConfigRequestRecallConfig extends $dara.Model {
  /**
   * @example
   * this is etrec recall
   */
  description?: string;
  /**
   * @example
   * ""
   */
  extendedConfig?: string;
  /**
   * @example
   * [{"option":"<","field":"category","type":"STRING","value":"10"}]
   */
  itemConditionArray?: string;
  /**
   * @example
   * age>20
   */
  itemConditionExpression?: string;
  /**
   * @example
   * item_embedding
   */
  itemVectorField?: string;
  /**
   * @example
   * 5
   */
  itemVectorRecallManagementTableId?: string;
  /**
   * @example
   * etrec
   */
  name?: string;
  operators?: CreateRecallManagementServiceVersionConfigRequestRecallConfigOperators[];
  /**
   * @example
   * 2
   */
  priority?: number;
  /**
   * @example
   * 3
   */
  recallManagementTableId?: string;
  /**
   * @example
   * X2I
   */
  recallType?: string;
  /**
   * @example
   * user_embedding
   */
  userVectorField?: string;
  /**
   * @example
   * 4
   */
  userVectorRecallManagementTableId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      extendedConfig: 'ExtendedConfig',
      itemConditionArray: 'ItemConditionArray',
      itemConditionExpression: 'ItemConditionExpression',
      itemVectorField: 'ItemVectorField',
      itemVectorRecallManagementTableId: 'ItemVectorRecallManagementTableId',
      name: 'Name',
      operators: 'Operators',
      priority: 'Priority',
      recallManagementTableId: 'RecallManagementTableId',
      recallType: 'RecallType',
      userVectorField: 'UserVectorField',
      userVectorRecallManagementTableId: 'UserVectorRecallManagementTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      extendedConfig: 'string',
      itemConditionArray: 'string',
      itemConditionExpression: 'string',
      itemVectorField: 'string',
      itemVectorRecallManagementTableId: 'string',
      name: 'string',
      operators: { 'type': 'array', 'itemType': CreateRecallManagementServiceVersionConfigRequestRecallConfigOperators },
      priority: 'number',
      recallManagementTableId: 'string',
      recallType: 'string',
      userVectorField: 'string',
      userVectorRecallManagementTableId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.operators)) {
      $dara.Model.validateArray(this.operators);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecallManagementServiceVersionConfigRequest extends $dara.Model {
  /**
   * @example
   * Recall
   */
  configType?: string;
  /**
   * @example
   * pai-teest-1
   */
  instanceId?: string;
  mergeConfig?: CreateRecallManagementServiceVersionConfigRequestMergeConfig;
  recallConfig?: CreateRecallManagementServiceVersionConfigRequestRecallConfig;
  static names(): { [key: string]: string } {
    return {
      configType: 'ConfigType',
      instanceId: 'InstanceId',
      mergeConfig: 'MergeConfig',
      recallConfig: 'RecallConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      instanceId: 'string',
      mergeConfig: CreateRecallManagementServiceVersionConfigRequestMergeConfig,
      recallConfig: CreateRecallManagementServiceVersionConfigRequestRecallConfig,
    };
  }

  validate() {
    if(this.mergeConfig && typeof (this.mergeConfig as any).validate === 'function') {
      (this.mergeConfig as any).validate();
    }
    if(this.recallConfig && typeof (this.recallConfig as any).validate === 'function') {
      (this.recallConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

