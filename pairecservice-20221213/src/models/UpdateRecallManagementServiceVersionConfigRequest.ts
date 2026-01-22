// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRecallManagementServiceVersionConfigRequestMergeConfig extends $dara.Model {
  extendedConfig?: string;
  filterExpression?: string;
  filterRecallManagementTableIds?: string[];
  itemRecallManagementTableId?: string;
  itemTableFields?: string[];
  mergeType?: string;
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

export class UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFilterConfig extends $dara.Model {
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
  field?: string;
  outputFields?: string;
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
      outputFields: 'string',
      recallManagementTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsTriggerConfig extends $dara.Model {
  field?: string;
  fieldQuantityLimit?: string;
  isRandSort?: string;
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

export class UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperators extends $dara.Model {
  featureConfig?: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFeatureConfig;
  filterConfig?: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFilterConfig;
  joinConfig?: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsJoinConfig;
  operatorsType?: string;
  triggerConfig?: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsTriggerConfig;
  static names(): { [key: string]: string } {
    return {
      featureConfig: 'FeatureConfig',
      filterConfig: 'FilterConfig',
      joinConfig: 'JoinConfig',
      operatorsType: 'OperatorsType',
      triggerConfig: 'TriggerConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureConfig: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFeatureConfig,
      filterConfig: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsFilterConfig,
      joinConfig: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperatorsJoinConfig,
      operatorsType: 'string',
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
  description?: string;
  extendedConfig?: string;
  /**
   * @example
   * ["type":"equal"]
   */
  itemConditionArray?: string;
  /**
   * @example
   * age>20
   */
  itemConditionExpression?: string;
  itemVectorField?: string;
  itemVectorRecallManagementTableId?: string;
  name?: string;
  operators?: UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperators[];
  priority?: number;
  recallManagementTableId?: string;
  recallType?: string;
  userVectorField?: string;
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
      operators: { 'type': 'array', 'itemType': UpdateRecallManagementServiceVersionConfigRequestRecallConfigOperators },
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

export class UpdateRecallManagementServiceVersionConfigRequest extends $dara.Model {
  regionId?: string;
  configType?: string;
  instanceId?: string;
  mergeConfig?: UpdateRecallManagementServiceVersionConfigRequestMergeConfig;
  recallConfig?: UpdateRecallManagementServiceVersionConfigRequestRecallConfig;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      configType: 'ConfigType',
      instanceId: 'InstanceId',
      mergeConfig: 'MergeConfig',
      recallConfig: 'RecallConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
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

