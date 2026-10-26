// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecallManagementServiceVersionConfigResponseBodyMergeConfig extends $dara.Model {
  /**
   * @remarks
   * The additional merge configuration for future feature extensions.
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
   * The filter table IDs.
   */
  filterRecallManagementTableIds?: string[];
  /**
   * @remarks
   * The item table ID.
   * 
   * @example
   * 2
   */
  itemRecallManagementTableId?: string;
  /**
   * @remarks
   * The item table output fields.
   */
  itemTableFields?: string[];
  /**
   * @remarks
   * The merge type. Valid values:
   * - Weight: weight.
   * - Alternate: alternate.
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

export class GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsFeatureConfig extends $dara.Model {
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
   * age
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

export class GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsFilterConfig extends $dara.Model {
  /**
   * @remarks
   * The filter expression.
   * 
   * @example
   * age>20
   */
  expression?: string;
  static names(): { [key: string]: string } {
    return {
      expression: 'Expression',
    };
  }

  static types(): { [key: string]: any } {
    return {
      expression: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsJoinConfig extends $dara.Model {
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
   * The list of returned fields.
   */
  outputFields?: string[];
  /**
   * @remarks
   * The join table ID.
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

export class GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsTriggerConfig extends $dara.Model {
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
   * Specifies whether random sorting is enabled.
   * 
   * @example
   * false
   */
  isRandSort?: boolean;
  /**
   * @remarks
   * The sort fields.
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

export class GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperators extends $dara.Model {
  /**
   * @remarks
   * The configuration of the Feature operator.
   */
  featureConfig?: GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsFeatureConfig;
  /**
   * @remarks
   * The configuration of the Filter operator.
   */
  filterConfig?: GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsFilterConfig;
  /**
   * @remarks
   * The configuration of the Join operator.
   */
  joinConfig?: GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsJoinConfig;
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
   * The configuration of the Trigger operator.
   */
  triggerConfig?: GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsTriggerConfig;
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
      featureConfig: GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsFeatureConfig,
      filterConfig: GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsFilterConfig,
      joinConfig: GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsJoinConfig,
      operatorType: 'string',
      triggerConfig: GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsTriggerConfig,
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

export class GetRecallManagementServiceVersionConfigResponseBodyRecallConfig extends $dara.Model {
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
   * The additional configuration for future feature extensions.
   * 
   * @example
   * {"":""}
   */
  extendedConfig?: string;
  /**
   * @remarks
   * The item conditions in array format.
   * 
   * @example
   * [{"option":"<","field":"category","type":"STRING","value":"10"}]
   */
  itemConditionArray?: string;
  /**
   * @remarks
   * The item conditional expression.
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
   * The item vector recall table ID.
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
   * The list of operators.
   */
  operators?: GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperators[];
  /**
   * @remarks
   * The priority. A smaller number indicates a higher priority.
   * 
   * @example
   * 10
   */
  priority?: number;
  /**
   * @remarks
   * The recall management service version configuration ID.
   * 
   * @example
   * 4
   */
  recallManagementServiceVersionConfigId?: string;
  /**
   * @remarks
   * The recall management table ID.
   * 
   * @example
   * 3
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
   * The user vector recall table ID.
   * 
   * @example
   * 2
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
      operators: { 'type': 'array', 'itemType': GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperators },
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

export class GetRecallManagementServiceVersionConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The recall management version configuration type. Valid values:
   * - Recall: recall configuration.
   * - Merge: merge configuration.
   * 
   * @example
   * Recall
   */
  configType?: string;
  /**
   * @remarks
   * The creation time in ISO 8601 format, including the time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The update time in ISO 8601 format, including the time zone offset.
   * 
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The merge configuration.
   */
  mergeConfig?: GetRecallManagementServiceVersionConfigResponseBodyMergeConfig;
  /**
   * @remarks
   * The recall configuration.
   */
  recallConfig?: GetRecallManagementServiceVersionConfigResponseBodyRecallConfig;
  /**
   * @remarks
   * The recall management service ID.
   * 
   * @example
   * 3
   */
  recallManagementServiceId?: string;
  /**
   * @remarks
   * The recall management service version configuration ID.
   * 
   * @example
   * 2
   */
  recallManagementServiceVersionConfigId?: string;
  /**
   * @remarks
   * The recall management service version ID.
   * 
   * @example
   * 2
   */
  recallManagementServiceVersionId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 728C5E01-ABF6-5AA8-B9FC-B3BA05DECC77
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'ConfigType',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      mergeConfig: 'MergeConfig',
      recallConfig: 'RecallConfig',
      recallManagementServiceId: 'RecallManagementServiceId',
      recallManagementServiceVersionConfigId: 'RecallManagementServiceVersionConfigId',
      recallManagementServiceVersionId: 'RecallManagementServiceVersionId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      mergeConfig: GetRecallManagementServiceVersionConfigResponseBodyMergeConfig,
      recallConfig: GetRecallManagementServiceVersionConfigResponseBodyRecallConfig,
      recallManagementServiceId: 'string',
      recallManagementServiceVersionConfigId: 'string',
      recallManagementServiceVersionId: 'string',
      requestId: 'string',
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

