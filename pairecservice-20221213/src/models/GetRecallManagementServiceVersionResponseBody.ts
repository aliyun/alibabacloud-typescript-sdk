// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecallManagementServiceVersionResponseBodyConfigsMergeConfig extends $dara.Model {
  /**
   * @remarks
   * Reserved for future use.
   * 
   * @example
   * ""
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
   * The identifiers of the tables to filter.
   */
  filterRecallManagementTableIds?: string[];
  /**
   * @remarks
   * The identifier of the item table.
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
   * The merge type.
   * 
   * @example
   * Weight
   */
  mergeType?: string;
  /**
   * @remarks
   * The identifier of the recall service version configuration.
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

export class GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsFeatureConfig extends $dara.Model {
  /**
   * @remarks
   * The feature expression.
   * 
   * @example
   * city = \\"hangzhou\\"
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
   * STRING
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

export class GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsFilterConfig extends $dara.Model {
  /**
   * @remarks
   * The filter expression.
   * 
   * @example
   * age > 10
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

export class GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsJoinConfig extends $dara.Model {
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
   * The fields to return.
   */
  outputFields?: string[];
  /**
   * @remarks
   * The identifier of the join table.
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

export class GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsTriggerConfig extends $dara.Model {
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
   * Indicates whether to perform a random sort.
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

export class GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperators extends $dara.Model {
  /**
   * @remarks
   * The configuration for the Feature operator.
   */
  featureConfig?: GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsFeatureConfig;
  /**
   * @remarks
   * The configuration for the Filter operator.
   */
  filterConfig?: GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsFilterConfig;
  /**
   * @remarks
   * The configuration for the Join operator.
   */
  joinConfig?: GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsJoinConfig;
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
  triggerConfig?: GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsTriggerConfig;
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
      featureConfig: GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsFeatureConfig,
      filterConfig: GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsFilterConfig,
      joinConfig: GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsJoinConfig,
      operatorType: 'string',
      triggerConfig: GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsTriggerConfig,
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

export class GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigs extends $dara.Model {
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
   * Reserved for future use.
   * 
   * @example
   * ""
   */
  extendedConfig?: string;
  /**
   * @remarks
   * The item conditions, specified as a string in JSON array format.
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
   * The identifier of the item vector recall table.
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
   * The list of operators to apply.
   */
  operators?: GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperators[];
  /**
   * @remarks
   * The priority. A smaller value indicates a higher priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The identifier of the recall service version configuration.
   * 
   * @example
   * 5
   */
  recallManagementServiceVersionConfigId?: string;
  /**
   * @remarks
   * The identifier of the recall management table.
   * 
   * @example
   * 2
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
   * The identifier of the user vector recall table.
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
      recallManagementServiceVersionConfigId: 'RecallManagementServiceVersionConfigId',
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
      operators: { 'type': 'array', 'itemType': GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperators },
      priority: 'number',
      recallManagementServiceVersionConfigId: 'string',
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

export class GetRecallManagementServiceVersionResponseBodyConfigs extends $dara.Model {
  /**
   * @remarks
   * The merge configuration.
   */
  mergeConfig?: GetRecallManagementServiceVersionResponseBodyConfigsMergeConfig;
  /**
   * @remarks
   * The recall service version configurations.
   */
  recallConfigs?: GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigs[];
  static names(): { [key: string]: string } {
    return {
      mergeConfig: 'MergeConfig',
      recallConfigs: 'RecallConfigs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mergeConfig: GetRecallManagementServiceVersionResponseBodyConfigsMergeConfig,
      recallConfigs: { 'type': 'array', 'itemType': GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigs },
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

export class GetRecallManagementServiceVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration details.
   */
  configs?: GetRecallManagementServiceVersionResponseBodyConfigs;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * Indicates whether the current version is effective.
   */
  isEffective?: boolean;
  /**
   * @remarks
   * The name of the recall service version.
   * 
   * @example
   * V1
   */
  name?: string;
  /**
   * @remarks
   * The identifier of the recall service version.
   * 
   * @example
   * 2
   */
  recallManagementServiceVersionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E15A1443-7917-5BE0-AE70-25538ECF398D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configs: 'Configs',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      isEffective: 'IsEffective',
      name: 'Name',
      recallManagementServiceVersionId: 'RecallManagementServiceVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configs: GetRecallManagementServiceVersionResponseBodyConfigs,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      isEffective: 'boolean',
      name: 'string',
      recallManagementServiceVersionId: 'string',
      requestId: 'string',
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

