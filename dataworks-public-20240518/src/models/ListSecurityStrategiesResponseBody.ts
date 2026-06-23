// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSecurityStrategiesResponseBodyPagingInfoSecurityStrategiesContentControllers extends $dara.Model {
  /**
   * @remarks
   * The default value for Basic Edition.
   * 
   * @example
   * 10000
   */
  basicEditionDefaultValue?: any;
  /**
   * @remarks
   * The valid value range for Basic Edition, specified as [min, max].
   */
  basicEditionIntervalValue?: number[];
  /**
   * @remarks
   * The identifier of the control item. For valid values, see the list of control items for each schema.
   * 
   * @example
   * viewCount
   */
  controller?: string;
  /**
   * @remarks
   * The data type of the value. Valid values: `Boolean`, `Integer`, `Long`, and `String`.
   * 
   * @example
   * Integer
   */
  controllerValueType?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 查询结果-单次展示记录值上限
   */
  displayName?: string;
  /**
   * @remarks
   * The display name in English.
   * 
   * @example
   * Query Results - Single Display Record Limit
   */
  displayNameEn?: string;
  /**
   * @remarks
   * Whether the control item is enabled.
   */
  enable?: boolean;
  /**
   * @remarks
   * The default value for Enterprise Edition.
   * 
   * @example
   * 10000
   */
  enterpriseEditionDefaultValue?: any;
  /**
   * @remarks
   * The valid value range for Enterprise Edition, specified as [min, max].
   */
  enterpriseEditionIntervalValue?: number[];
  /**
   * @remarks
   * The default value for Professional Edition.
   * 
   * @example
   * 10000
   */
  professionalEditionDefaultValue?: any;
  /**
   * @remarks
   * The valid value range for Professional Edition, specified as [min, max].
   */
  professionalEditionIntervalValue?: number[];
  /**
   * @remarks
   * The default value for Standard Edition.
   * 
   * @example
   * 10000
   */
  standardEditionDefaultValue?: any;
  /**
   * @remarks
   * The valid value range for Standard Edition, specified as [min, max].
   */
  standardEditionIntervalValue?: number[];
  /**
   * @remarks
   * The value set for the control item. The data type of this value is specified by `ControllerValueType`.
   * 
   * @example
   * 20
   */
  userConfigValue?: any;
  static names(): { [key: string]: string } {
    return {
      basicEditionDefaultValue: 'BasicEditionDefaultValue',
      basicEditionIntervalValue: 'BasicEditionIntervalValue',
      controller: 'Controller',
      controllerValueType: 'ControllerValueType',
      displayName: 'DisplayName',
      displayNameEn: 'DisplayNameEn',
      enable: 'Enable',
      enterpriseEditionDefaultValue: 'EnterpriseEditionDefaultValue',
      enterpriseEditionIntervalValue: 'EnterpriseEditionIntervalValue',
      professionalEditionDefaultValue: 'ProfessionalEditionDefaultValue',
      professionalEditionIntervalValue: 'ProfessionalEditionIntervalValue',
      standardEditionDefaultValue: 'StandardEditionDefaultValue',
      standardEditionIntervalValue: 'StandardEditionIntervalValue',
      userConfigValue: 'UserConfigValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicEditionDefaultValue: 'any',
      basicEditionIntervalValue: { 'type': 'array', 'itemType': 'number' },
      controller: 'string',
      controllerValueType: 'string',
      displayName: 'string',
      displayNameEn: 'string',
      enable: 'boolean',
      enterpriseEditionDefaultValue: 'any',
      enterpriseEditionIntervalValue: { 'type': 'array', 'itemType': 'number' },
      professionalEditionDefaultValue: 'any',
      professionalEditionIntervalValue: { 'type': 'array', 'itemType': 'number' },
      standardEditionDefaultValue: 'any',
      standardEditionIntervalValue: { 'type': 'array', 'itemType': 'number' },
      userConfigValue: 'any',
    };
  }

  validate() {
    if(Array.isArray(this.basicEditionIntervalValue)) {
      $dara.Model.validateArray(this.basicEditionIntervalValue);
    }
    if(Array.isArray(this.enterpriseEditionIntervalValue)) {
      $dara.Model.validateArray(this.enterpriseEditionIntervalValue);
    }
    if(Array.isArray(this.professionalEditionIntervalValue)) {
      $dara.Model.validateArray(this.professionalEditionIntervalValue);
    }
    if(Array.isArray(this.standardEditionIntervalValue)) {
      $dara.Model.validateArray(this.standardEditionIntervalValue);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityStrategiesResponseBodyPagingInfoSecurityStrategiesContent extends $dara.Model {
  /**
   * @remarks
   * The control scope.
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * The control module. This value is from the `controlModule` property of the associated `SecurityStrategySchema`.
   * 
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @remarks
   * The control submodule. This value is from the `controlSubModule` property of the associated `SecurityStrategySchema`.
   * 
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @remarks
   * A list of control items. The available items depend on the schema. For details, see the `Controller` definition and the list of control items for each schema.
   */
  controllers?: ListSecurityStrategiesResponseBodyPagingInfoSecurityStrategiesContentControllers[];
  /**
   * @remarks
   * The `displayName` of the associated `SecurityStrategySchema`.
   * 
   * @example
   * 数据分析
   */
  displayName?: string;
  /**
   * @remarks
   * The `displayNameEn` of the associated `SecurityStrategySchema`.
   * 
   * @example
   * Data Query
   */
  displayNameEn?: string;
  /**
   * @remarks
   * The `name` of the associated `SecurityStrategySchema`.
   * 
   * @example
   * DataQuerySecurityStrategySchema
   */
  name?: string;
  /**
   * @remarks
   * The display name of the system policy.
   * 
   * @example
   * Default system generate data query policy
   */
  systemPolicyDisplayName?: string;
  /**
   * @remarks
   * The name of the system policy. If this property is not empty, the system automatically creates a default policy.
   * 
   * @example
   * SYSTEM_GENERATE_DEFAULT_DATA_QUERY
   */
  systemPolicyName?: string;
  static names(): { [key: string]: string } {
    return {
      controlDwScope: 'ControlDwScope',
      controlModule: 'ControlModule',
      controlSubModule: 'ControlSubModule',
      controllers: 'Controllers',
      displayName: 'DisplayName',
      displayNameEn: 'DisplayNameEn',
      name: 'Name',
      systemPolicyDisplayName: 'SystemPolicyDisplayName',
      systemPolicyName: 'SystemPolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controlDwScope: 'string',
      controlModule: 'string',
      controlSubModule: 'string',
      controllers: { 'type': 'array', 'itemType': ListSecurityStrategiesResponseBodyPagingInfoSecurityStrategiesContentControllers },
      displayName: 'string',
      displayNameEn: 'string',
      name: 'string',
      systemPolicyDisplayName: 'string',
      systemPolicyName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.controllers)) {
      $dara.Model.validateArray(this.controllers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityStrategiesResponseBodyPagingInfoSecurityStrategies extends $dara.Model {
  /**
   * @remarks
   * The policy content. The content is constrained by `SecurityStrategySchema`.
   */
  content?: ListSecurityStrategiesResponseBodyPagingInfoSecurityStrategiesContent;
  /**
   * @remarks
   * The control scope. Valid values: `Workspace` and `Tenant`.
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * The control module.
   * 
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @remarks
   * The control submodule.
   * 
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-05-25T20:46:19
   */
  createTime?: string;
  /**
   * @remarks
   * The user ID of the creator.
   * 
   * @example
   * 203322746501002787
   */
  creator?: string;
  /**
   * @remarks
   * The policy description.
   * 
   * @example
   * 控制数据分析模块的查询结果安全行为
   */
  description?: string;
  /**
   * @remarks
   * Whether the policy is enabled.
   * 
   * @example
   * false
   */
  enabled?: boolean;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 12345
   */
  id?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * 默认数据分析策略
   */
  name?: string;
  /**
   * @remarks
   * The source ID of the system default policy.
   * 
   * @example
   * 12
   */
  originPolicyId?: number;
  /**
   * @remarks
   * The name of the schema template.
   * 
   * @example
   * DataQuerySecurityStrategySchema
   */
  schemaName?: string;
  /**
   * @remarks
   * The time of the last update.
   * 
   * @example
   * 2026-05-25T20:46:19
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the user who last updated the policy.
   * 
   * @example
   * 203322746501002787
   */
  updater?: string;
  /**
   * @remarks
   * The associated workspace IDs.
   */
  workspaces?: number[];
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      controlDwScope: 'ControlDwScope',
      controlModule: 'ControlModule',
      controlSubModule: 'ControlSubModule',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      enabled: 'Enabled',
      id: 'Id',
      name: 'Name',
      originPolicyId: 'OriginPolicyId',
      schemaName: 'SchemaName',
      updateTime: 'UpdateTime',
      updater: 'Updater',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: ListSecurityStrategiesResponseBodyPagingInfoSecurityStrategiesContent,
      controlDwScope: 'string',
      controlModule: 'string',
      controlSubModule: 'string',
      createTime: 'string',
      creator: 'string',
      description: 'string',
      enabled: 'boolean',
      id: 'string',
      name: 'string',
      originPolicyId: 'number',
      schemaName: 'string',
      updateTime: 'string',
      updater: 'string',
      workspaces: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    if(Array.isArray(this.workspaces)) {
      $dara.Model.validateArray(this.workspaces);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityStrategiesResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size. Default value: 20.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of security policies.
   */
  securityStrategies?: ListSecurityStrategiesResponseBodyPagingInfoSecurityStrategies[];
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityStrategies: 'SecurityStrategies',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      securityStrategies: { 'type': 'array', 'itemType': ListSecurityStrategiesResponseBodyPagingInfoSecurityStrategies },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.securityStrategies)) {
      $dara.Model.validateArray(this.securityStrategies);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSecurityStrategiesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The pagination result.
   */
  pagingInfo?: ListSecurityStrategiesResponseBodyPagingInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc5df3a17****903790e8e8a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pagingInfo: 'PagingInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pagingInfo: ListSecurityStrategiesResponseBodyPagingInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pagingInfo && typeof (this.pagingInfo as any).validate === 'function') {
      (this.pagingInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

