// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRecallManagementServiceVersionRequestConfigsMergeConfig extends $dara.Model {
  /**
   * @remarks
   * This parameter is reserved for future use.
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
   * age>10
   */
  filterExpression?: string;
  /**
   * @remarks
   * The IDs of tables to use for filtering results.
   */
  filterRecallManagementTableIds?: string[];
  /**
   * @remarks
   * The item recall management table ID.
   * 
   * @example
   * 2
   */
  itemRecallManagementTableId?: string;
  /**
   * @remarks
   * The fields to return from the item table.
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
   * The recall management service version configuration ID.
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

export class CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperatorsFeatureConfig extends $dara.Model {
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

export class CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperatorsFilterConfig extends $dara.Model {
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

export class CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperatorsJoinConfig extends $dara.Model {
  /**
   * @remarks
   * **The field to join on.**
   * 
   * @example
   * item_id
   */
  field?: string;
  /**
   * @remarks
   * **The fields to include from the joined table.**
   * 
   * @example
   * item_id
   */
  outputFields?: string[];
  /**
   * @remarks
   * **The ID of the table to join with.**
   * 
   * @example
   * 4
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

export class CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperatorsTriggerConfig extends $dara.Model {
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
   * The limit on the number of fields.
   * 
   * @example
   * 20
   */
  fieldQuantityLimit?: number;
  /**
   * @remarks
   * Specifies whether to sort randomly.
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

export class CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperators extends $dara.Model {
  /**
   * @remarks
   * The configuration for the feature operator.
   */
  featureConfig?: CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperatorsFeatureConfig;
  /**
   * @remarks
   * The configuration for the filter operator.
   */
  filterConfig?: CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperatorsFilterConfig;
  /**
   * @remarks
   * The configuration for the Join operator.
   */
  joinConfig?: CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperatorsJoinConfig;
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
   * The configuration for the Trigger operator.
   */
  triggerConfig?: CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperatorsTriggerConfig;
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
      featureConfig: CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperatorsFeatureConfig,
      filterConfig: CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperatorsFilterConfig,
      joinConfig: CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperatorsJoinConfig,
      operatorType: 'string',
      triggerConfig: CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperatorsTriggerConfig,
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

export class CreateRecallManagementServiceVersionRequestConfigsRecallConfigs extends $dara.Model {
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
   * **This parameter is reserved for future use.**
   * 
   * @example
   * ""
   */
  extendedConfig?: string;
  /**
   * @remarks
   * The conditions for an item, formatted as an array.
   * 
   * @example
   * [{"option":"<","field":"category","type":"STRING","value":"10"}]
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
   * The item vector recall management table ID.
   * 
   * @example
   * 4
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
  operators?: CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperators[];
  /**
   * @remarks
   * The priority. A lower value indicates a higher priority.
   * 
   * @example
   * 1
   */
  priority?: number;
  /**
   * @remarks
   * The recall management table ID.
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
   * The user vector recall management table ID.
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
      operators: { 'type': 'array', 'itemType': CreateRecallManagementServiceVersionRequestConfigsRecallConfigsOperators },
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

export class CreateRecallManagementServiceVersionRequestConfigs extends $dara.Model {
  /**
   * @remarks
   * **Specifies how to merge recall results.**
   */
  mergeConfig?: CreateRecallManagementServiceVersionRequestConfigsMergeConfig;
  /**
   * @remarks
   * A list of recall configurations.
   */
  recallConfigs?: CreateRecallManagementServiceVersionRequestConfigsRecallConfigs[];
  static names(): { [key: string]: string } {
    return {
      mergeConfig: 'MergeConfig',
      recallConfigs: 'RecallConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mergeConfig: CreateRecallManagementServiceVersionRequestConfigsMergeConfig,
      recallConfigs: { 'type': 'array', 'itemType': CreateRecallManagementServiceVersionRequestConfigsRecallConfigs },
    };
  }

  validate() {
    if(this.mergeConfig && typeof (this.mergeConfig as any).validate === 'function') {
      (this.mergeConfig as any).validate();
    }
    if(Array.isArray(this.recallConfigs)) {
      $dara.Model.validateArray(this.recallConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRecallManagementServiceVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration details.
   */
  configs?: CreateRecallManagementServiceVersionRequestConfigs;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * learn-pairec-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The source recall management service version ID.
   * 
   * @example
   * 4
   */
  sourceRecallManagementServiceVersionId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      instanceId: 'InstanceId',
      sourceRecallManagementServiceVersionId: 'SourceRecallManagementServiceVersionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: CreateRecallManagementServiceVersionRequestConfigs,
      instanceId: 'string',
      sourceRecallManagementServiceVersionId: 'string',
    };
  }

  validate() {
    if(this.configs && typeof (this.configs as any).validate === 'function') {
      (this.configs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

