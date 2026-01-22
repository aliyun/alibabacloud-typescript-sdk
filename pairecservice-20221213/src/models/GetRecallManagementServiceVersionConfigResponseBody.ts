// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRecallManagementServiceVersionConfigResponseBodyMergeConfig extends $dara.Model {
  /**
   * @example
   * {"":""}
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

export class GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsFeatureConfig extends $dara.Model {
  expression?: string;
  name?: string;
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
  field?: string;
  outputFields?: string[];
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
  field?: string;
  fieldQuantityLimit?: number;
  isRandSort?: boolean;
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
  featureConfig?: GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsFeatureConfig;
  filterConfig?: GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsFilterConfig;
  joinConfig?: GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperatorsJoinConfig;
  operatorType?: string;
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
   * @example
   * this is etrec recall
   */
  description?: string;
  /**
   * @example
   * {"":""}
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
   * 2
   */
  itemVectorRecallManagementTableId?: string;
  /**
   * @example
   * etrec
   */
  name?: string;
  operators?: GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperators[];
  /**
   * @example
   * 10
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
      operators: { 'type': 'array', 'itemType': GetRecallManagementServiceVersionConfigResponseBodyRecallConfigOperators },
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

export class GetRecallManagementServiceVersionConfigResponseBody extends $dara.Model {
  /**
   * @example
   * Recall
   */
  configType?: string;
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
  mergeConfig?: GetRecallManagementServiceVersionConfigResponseBodyMergeConfig;
  recallConfig?: GetRecallManagementServiceVersionConfigResponseBodyRecallConfig;
  /**
   * @example
   * 3
   */
  recallManagementServiceId?: string;
  /**
   * @example
   * 2
   */
  recallManagementServiceVersionConfigId?: string;
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

