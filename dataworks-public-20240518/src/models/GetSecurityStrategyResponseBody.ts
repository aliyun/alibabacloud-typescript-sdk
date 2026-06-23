// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityStrategyResponseBodySecurityStrategyContentControllers extends $dara.Model {
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
   * The valid value range for Basic Edition, specified as an array `[min, max]`.
   */
  basicEditionIntervalValue?: number[];
  /**
   * @remarks
   * The identifier for the controller. For valid values, see the documentation for the relevant schema.
   * 
   * @example
   * viewCount
   */
  controller?: string;
  /**
   * @remarks
   * The value type of the controller. Valid values are `Boolean`, `Integer`, `Long`, and `String`.
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
   * Whether the controller is enabled.
   * 
   * @example
   * true
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
   * The valid value range for Enterprise Edition, specified as an array `[min, max]`.
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
   * The valid value range for Professional Edition, specified as an array `[min, max]`.
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
   * The valid value range for Standard Edition, specified as an array `[min, max]`.
   */
  standardEditionIntervalValue?: number[];
  /**
   * @remarks
   * The value configured by the user. The data type of this value is specified by the `ControllerValueType` parameter.
   * 
   * @example
   * 10
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

export class GetSecurityStrategyResponseBodySecurityStrategyContent extends $dara.Model {
  /**
   * @remarks
   * The scope where the policy is effective. Valid values:
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * The control module. This value corresponds to `controlModule` in the associated `SecurityStrategySchema`.
   * 
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @remarks
   * The control submodule. This value corresponds to `controlSubModule` in the associated `SecurityStrategySchema`.
   * 
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @remarks
   * A list of controllers.
   * 
   * **Note:** The available controllers depend on the selected schema. See the documentation for your schema for a list of valid controllers.
   */
  controllers?: GetSecurityStrategyResponseBodySecurityStrategyContentControllers[];
  /**
   * @remarks
   * The `displayName` field from the associated `SecurityStrategySchema`.
   * 
   * @example
   * 数据分析
   */
  displayName?: string;
  /**
   * @remarks
   * The `displayNameEn` field from the associated `SecurityStrategySchema`.
   * 
   * @example
   * Data Query
   */
  displayNameEn?: string;
  /**
   * @remarks
   * The `name` field from the associated `SecurityStrategySchema`.
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
   * The name of the system policy. If specified, a default policy is automatically created.
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
      controllers: { 'type': 'array', 'itemType': GetSecurityStrategyResponseBodySecurityStrategyContentControllers },
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

export class GetSecurityStrategyResponseBodySecurityStrategy extends $dara.Model {
  /**
   * @remarks
   * The content of the security policy. Its structure is defined by the `SecurityStrategySchema`.
   */
  content?: GetSecurityStrategyResponseBodySecurityStrategyContent;
  /**
   * @remarks
   * The scope where the policy is effective. Valid values: `Workspace` or `Tenant`.
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
   * The time when the security policy was created.
   * 
   * @example
   * 2026-05-25T20:46:19
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the creator.
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
   * Whether the security policy is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 13
   */
  id?: number;
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
   * The source ID of the default system policy.
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
   * The time when the security policy was last updated.
   * 
   * @example
   * 2026-05-25T20:46:19
   */
  updateTime?: string;
  /**
   * @remarks
   * The ID of the last updater.
   * 
   * @example
   * 203322746501002787
   */
  updater?: string;
  /**
   * @remarks
   * The list of associated workspace IDs.
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
      content: GetSecurityStrategyResponseBodySecurityStrategyContent,
      controlDwScope: 'string',
      controlModule: 'string',
      controlSubModule: 'string',
      createTime: 'string',
      creator: 'string',
      description: 'string',
      enabled: 'boolean',
      id: 'number',
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

export class GetSecurityStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc5df3a17****903790e8e8a
   */
  requestId?: string;
  /**
   * @remarks
   * The security policy.
   */
  securityStrategy?: GetSecurityStrategyResponseBodySecurityStrategy;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityStrategy: 'SecurityStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityStrategy: GetSecurityStrategyResponseBodySecurityStrategy,
    };
  }

  validate() {
    if(this.securityStrategy && typeof (this.securityStrategy as any).validate === 'function') {
      (this.securityStrategy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

