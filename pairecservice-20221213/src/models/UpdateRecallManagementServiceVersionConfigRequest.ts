// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecallManagementServiceVersionConfigRequestMergeConfig extends $dara.Model {
  /**
   * @remarks
   * Additional configurations for the merge. Reserved for future use.
   * 
   * @example
   * {"":""}
   */
  extendedConfig?: string;
  /**
   * @remarks
   * The filter expression.
   * 
   * @example
   * age>20
   */
  filterExpression?: string;
  /**
   * @remarks
   * A list of recall management table IDs to use for filtering.
   */
  filterRecallManagementTableIds?: string[];
  /**
   * @remarks
   * The ID of the item recall management table.
   * 
   * @example
   * 2
   */
  itemRecallManagementTableId?: string;
  /**
   * @remarks
   * The output fields from the item table.
   */
  itemTableFields?: string[];
  /**
   * @remarks
   * The merge type. Valid values: `Weight` and `Alternate`.
   * 
   * @example
   * Weight
   */
  mergeType?: string;
  /**
   * @remarks
   * The ID of the recall management service version configuration.
   * 
   * @example
   * 4
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

export class UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFeatureConfig extends $dara.Model {
  /**
   * @remarks
   * The feature expression.
   * 
   * @example
   * category=3
   */
  expression?: string;
  /**
   * @remarks
   * The feature name.
   * 
   * @example
   * city
   */
  name?: string;
  /**
   * @remarks
   * The feature type.
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

export class UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFilterConfig extends $dara.Model {
  /**
   * @remarks
   * The filter expression.
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

export class UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsJoinConfig extends $dara.Model {
  /**
   * @remarks
   * The join field.
   * 
   * @example
   * item_id
   */
  field?: string;
  /**
   * @remarks
   * The fields to return from the join.
   */
  outputFields?: string[];
  /**
   * @remarks
   * The ID of the table to join.
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

export class UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsTriggerConfig extends $dara.Model {
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * user_id
   */
  field?: string;
  /**
   * @remarks
   * The maximum number of fields.
   * 
   * @example
   * 20
   */
  fieldQuantityLimit?: number;
  /**
   * @remarks
   * Specifies whether to perform a random sort.
   * 
   * @example
   * false
   */
  isRandSort?: boolean;
  /**
   * @remarks
   * The sort field.
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

export class UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperators extends $dara.Model {
  /**
   * @remarks
   * The configuration for the `Feature` operator.
   */
  featureConfig?: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFeatureConfig;
  /**
   * @remarks
   * The configuration for the `Filter` operator.
   */
  filterConfig?: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFilterConfig;
  /**
   * @remarks
   * The configuration for the `Join` operator.
   */
  joinConfig?: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsJoinConfig;
  /**
   * @remarks
   * The operator type.
   * 
   * @example
   * Filter
   */
  operatorType?: string;
  /**
   * @remarks
   * The configuration for the `Trigger` operator.
   */
  triggerConfig?: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsTriggerConfig;
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
      featureConfig: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFeatureConfig,
      filterConfig: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFilterConfig,
      joinConfig: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsJoinConfig,
      operatorType: 'string',
      triggerConfig: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsTriggerConfig,
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

export class UpdateRecallManagementServiceVersionConfigRequestRecallConfig extends $dara.Model {
  /**
   * @remarks
   * The recall description.
   * 
   * @example
   * this is etrec recall
   */
  description?: string;
  /**
   * @remarks
   * The extended configuration. Reserved for future use.
   * 
   * @example
   * {"":""}
   */
  extendedConfig?: string;
  /**
   * @remarks
   * The data format of the item condition.
   * 
   * @example
   * ["type":"equal"]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The item condition expression.
   * 
   * @example
   * age>20
   */
  itemConditionExpression?: string;
  /**
   * @remarks
   * The item vector field.
   * 
   * @example
   * item_embedding
   */
  itemVectorField?: string;
  /**
   * @remarks
   * The ID of the item vector recall management table.
   * 
   * @example
   * 2
   */
  itemVectorRecallManagementTableId?: string;
  /**
   * @remarks
   * The recall name.
   * 
   * @example
   * etrec
   */
  name?: string;
  /**
   * @remarks
   * A list of operators.
   */
  operators?: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperators[];
  /**
   * @remarks
   * The priority. A smaller value indicates a higher priority.
   * 
   * @example
   * 2
   */
  priority?: number;
  /**
   * @remarks
   * The ID of the recall management table.
   * 
   * @example
   * 1
   */
  recallManagementTableId?: string;
  /**
   * @remarks
   * The recall type.
   * 
   * @example
   * X2I
   */
  recallType?: string;
  /**
   * @remarks
   * The sort fields.
   * 
   * @example
   * name
   */
  sortFields?: string;
  /**
   * @remarks
   * The user vector field.
   * 
   * @example
   * user_embedding
   */
  userVectorField?: string;
  /**
   * @remarks
   * The ID of the user vector recall management table.
   * 
   * @example
   * 3
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
      operators: { 'type': 'array', 'itemType': UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperators },
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

export class UpdateRecallManagementServiceVersionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the recall management version configuration. Valid values are `Recall` for the recall configuration and `Merge` for the merge configuration.
   * 
   * @example
   * Recall
   */
  configType?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * pairec-cn-test123
   */
  instanceId?: string;
  /**
   * @remarks
   * The merge configuration.
   */
  mergeConfig?: UpdateRecallManagementServiceVersionConfigRequestMergeConfig;
  /**
   * @remarks
   * The recall configuration.
   */
  recallConfig?: UpdateRecallManagementServiceVersionConfigRequestRecallConfig;
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
      mergeConfig: UpdateRecallManagementServiceVersionConfigRequestMergeConfig,
      recallConfig: UpdateRecallManagementServiceVersionConfigRequestRecallConfig,
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

