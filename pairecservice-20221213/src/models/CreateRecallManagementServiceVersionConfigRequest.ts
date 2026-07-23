// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecallManagementServiceVersionConfigRequestMergeConfig extends $dara.Model {
  /**
   * @remarks
   * Additional configurations for the merge configuration are provided to facilitate future feature extensions.
   * 
   * @example
   * ""
   */
  extendedConfig?: string;
  /**
   * @remarks
   * Filter expression.
   * 
   * @example
   * age>20
   */
  filterExpression?: string;
  /**
   * @remarks
   * Filter table ID.
   */
  filterRecallManagementTableIds?: string[];
  /**
   * @remarks
   * Item table ID.
   * 
   * @example
   * 2
   */
  itemRecallManagementTableId?: string;
  /**
   * @remarks
   * Item table output fields.
   */
  itemTableFields?: string[];
  /**
   * @remarks
   * Merge type. Enumerated values: `Weight` and `Alternate`.
   * 
   * @example
   * Weight
   */
  mergeType?: string;
  /**
   * @remarks
   * recall management service version configuration ID.
   * 
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
   * @remarks
   * **Feature expression.**
   * 
   * @example
   * category=3
   */
  expression?: string;
  /**
   * @remarks
   * **Feature name.**
   * 
   * @example
   * city
   */
  name?: string;
  /**
   * @remarks
   * **Feature type.**
   * 
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
   * @remarks
   * Filter expression.
   * 
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
   * @remarks
   * Join field.
   * 
   * @example
   * item_id
   */
  field?: string;
  /**
   * @remarks
   * Return field.
   */
  outputFields?: string[];
  /**
   * @remarks
   * Join table ID.
   * 
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
   * @remarks
   * The name of the field.
   * 
   * @example
   * user_id
   */
  field?: string;
  /**
   * @remarks
   * Number of fields limit.
   * 
   * @example
   * 20
   */
  fieldQuantityLimit?: number;
  /**
   * @remarks
   * Whether to sort randomly.
   * 
   * @example
   * false
   */
  isRandSort?: boolean;
  /**
   * @remarks
   * Sort field.
   * 
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
      fieldQuantityLimit: 'number',
      isRandSort: 'boolean',
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
  /**
   * @remarks
   * **Feature operator configuration.**
   */
  featureConfig?: CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFeatureConfig;
  /**
   * @remarks
   * Filter operator configuration.
   */
  filterConfig?: CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFilterConfig;
  /**
   * @remarks
   * **Join operator configuration.**
   */
  joinConfig?: CreateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsJoinConfig;
  /**
   * @remarks
   * Operator type. Enumeration value: FilterFeatureTriggerFeature
   * 
   * @example
   * Filter
   */
  operatorType?: string;
  /**
   * @remarks
   * Trigger operator configuration.
   */
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
   * @remarks
   * Recall description.
   * 
   * @example
   * this is etrec recall
   */
  description?: string;
  /**
   * @remarks
   * Additional configuration for future feature expansion.
   * 
   * @example
   * ""
   */
  extendedConfig?: string;
  /**
   * @remarks
   * Item condition, setting array-formatted conditions
   * 
   * @example
   * [{"option":"<","field":"category","type":"STRING","value":"10"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * Item condition expression.
   * 
   * @example
   * age>20
   */
  itemConditionExpression?: string;
  /**
   * @remarks
   * Item vector field.
   * 
   * @example
   * item_embedding
   */
  itemVectorField?: string;
  /**
   * @remarks
   * The ID of the item vector recall table.
   * 
   * @example
   * 5
   */
  itemVectorRecallManagementTableId?: string;
  /**
   * @remarks
   * Recall name.
   * 
   * @example
   * etrec
   */
  name?: string;
  /**
   * @remarks
   * Operator list.
   */
  operators?: CreateRecallManagementServiceVersionConfigRequestRecallConfigOperators[];
  /**
   * @remarks
   * Priority. The smaller the number, the higher the priority.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * Recall management table ID.
   * 
   * @example
   * 3
   */
  recallManagementTableId?: string;
  /**
   * @remarks
   * Recall type.
   * 
   * @example
   * X2I
   */
  recallType?: string;
  /**
   * @remarks
   * Sort field.
   * 
   * @example
   * name
   */
  sortFields?: string;
  /**
   * @remarks
   * User vector field.
   * 
   * @example
   * user_embedding
   */
  userVectorField?: string;
  /**
   * @remarks
   * User vector recall table ID.
   * 
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
      sortFields: 'SortFields',
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
      sortFields: 'string',
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
   * @remarks
   * The configuration type for the recall management version, which can be `Recall` for a recall config or `Merge` for a merge config.
   * 
   * @example
   * Recall
   */
  configType?: string;
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * pai-teest-1
   */
  instanceId?: string;
  /**
   * @remarks
   * Merge configuration.
   */
  mergeConfig?: CreateRecallManagementServiceVersionConfigRequestMergeConfig;
  /**
   * @remarks
   * Recall configuration.
   */
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

