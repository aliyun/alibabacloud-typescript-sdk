// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecallManagementServiceVersionResponseBodyConfigsMergeConfig extends $dara.Model {
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

export class GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsFeatureConfig extends $dara.Model {
  /**
   * @example
   * city = \\"hangzhou\\"
   */
  expression?: string;
  /**
   * @example
   * city
   */
  name?: string;
  /**
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

export class GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsTriggerConfig extends $dara.Model {
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

export class GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperators extends $dara.Model {
  featureConfig?: GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsFeatureConfig;
  filterConfig?: GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsFilterConfig;
  joinConfig?: GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperatorsJoinConfig;
  /**
   * @example
   * Filter
   */
  operatorType?: string;
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
   * item_embedding
   */
  itemVectorField?: string;
  /**
   * @example
   * 4
   */
  itemVectorRecallManagementTableId?: string;
  /**
   * @example
   * etrec
   */
  name?: string;
  operators?: GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperators[];
  /**
   * @example
   * 10
   */
  priority?: number;
  /**
   * @example
   * 5
   */
  recallManagementServiceVersionConfigId?: string;
  /**
   * @example
   * 2
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
   * 3
   */
  userVectorRecallManagementTableId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      extendedConfig: 'ExtendedConfig',
      itemConditionArray: 'ItemConditionArray',
      itemVectorField: 'ItemVectorField',
      itemVectorRecallManagementTableId: 'ItemVectorRecallManagementTableId',
      name: 'Name',
      operators: 'Operators',
      priority: 'Priority',
      recallManagementServiceVersionConfigId: 'RecallManagementServiceVersionConfigId',
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
      itemVectorField: 'string',
      itemVectorRecallManagementTableId: 'string',
      name: 'string',
      operators: { 'type': 'array', 'itemType': GetRecallManagementServiceVersionResponseBodyConfigsRecallConfigsOperators },
      priority: 'number',
      recallManagementServiceVersionConfigId: 'string',
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

export class GetRecallManagementServiceVersionResponseBodyConfigs extends $dara.Model {
  mergeConfig?: GetRecallManagementServiceVersionResponseBodyConfigsMergeConfig;
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
  configs?: GetRecallManagementServiceVersionResponseBodyConfigs;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-12-15T23:24:33.132+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * false
   */
  isDefault?: string;
  /**
   * @example
   * V1
   */
  name?: string;
  /**
   * @example
   * 2
   */
  recallManagementServiceVersionId?: string;
  /**
   * @remarks
   * Id of the request
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
      isDefault: 'IsDefault',
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
      isDefault: 'string',
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

