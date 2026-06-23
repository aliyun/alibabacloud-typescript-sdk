// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityStrategyRequestContentControllers extends $dara.Model {
  /**
   * @remarks
   * The default value for Basic Edition.
   * 
   * @example
   * 0
   */
  basicEditionDefaultValue?: any;
  /**
   * @remarks
   * The valid value interval for Basic Edition, in the format `[min, max]`.
   */
  basicEditionIntervalValue?: number[];
  /**
   * @remarks
   * The controller identifier. For valid values, see the list of controllers for each schema.
   * 
   * @example
   * viewCount
   */
  controller?: string;
  /**
   * @remarks
   * The value type. Valid values: `Boolean`, `Integer`, `Long`, and `String`.
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
   * The English display name.
   * 
   * @example
   * Query Results - Single Display Record Limit
   */
  displayNameEn?: string;
  /**
   * @remarks
   * Specifies whether to enable this controller.
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
   * 500000
   */
  enterpriseEditionDefaultValue?: any;
  /**
   * @remarks
   * The valid value interval for Enterprise Edition, in the format `[min, max]`.
   */
  enterpriseEditionIntervalValue?: number[];
  /**
   * @remarks
   * The default value for Professional Edition.
   * 
   * @example
   * 200000
   */
  professionalEditionDefaultValue?: any;
  /**
   * @remarks
   * The valid value interval for Professional Edition, in the format `[min, max]`.
   */
  professionalEditionIntervalValue?: number[];
  /**
   * @remarks
   * The default value for Standard Edition.
   * 
   * @example
   * 100000
   */
  standardEditionDefaultValue?: any;
  /**
   * @remarks
   * The valid value interval for Standard Edition, in the format `[min, max]`.
   */
  standardEditionIntervalValue?: number[];
  /**
   * @remarks
   * The user-configured value. The type of this value depends on the `ControllerValueType` parameter.
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

export class CreateSecurityStrategyRequestContent extends $dara.Model {
  /**
   * @remarks
   * The control scope. This corresponds to the `controlDwScope` property of the `SecurityStrategySchema` associated with the current strategy.
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * The control module. This corresponds to the `controlModule` property of the `SecurityStrategySchema` associated with the current strategy.
   * 
   * This parameter is required.
   * 
   * @example
   * DataStudio
   */
  controlModule?: string;
  /**
   * @remarks
   * The control submodule. This corresponds to the `controlSubModule` property of the `SecurityStrategySchema` associated with the current strategy.
   * 
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @remarks
   * A list of controllers.
   * 
   * **Note:** Valid controllers depend on the selected schema. For more information, see the controller definitions and the list of controllers for each schema.
   */
  controllers?: CreateSecurityStrategyRequestContentControllers[];
  /**
   * @remarks
   * The `displayName` property of the `SecurityStrategySchema` associated with the current strategy.
   * 
   * @example
   * 数据分析
   */
  displayName?: string;
  /**
   * @remarks
   * The `displayNameEn` property of the `SecurityStrategySchema` associated with the current strategy.
   * 
   * @example
   * Data Analysis
   */
  displayNameEn?: string;
  /**
   * @remarks
   * The `name` property of the `SecurityStrategySchema` associated with the current strategy.
   * 
   * This parameter is required.
   * 
   * @example
   * DataQuerySecurityStrategySchema
   */
  name?: string;
  /**
   * @remarks
   * The `systemPolicyDisplayName` property of the `SecurityStrategySchema` associated with the current strategy.
   * 
   * @example
   * Default system generate data query policy
   */
  systemPolicyDisplayName?: string;
  /**
   * @remarks
   * The `systemPolicyName` property of the `SecurityStrategySchema` associated with the current strategy.
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
      controllers: { 'type': 'array', 'itemType': CreateSecurityStrategyRequestContentControllers },
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

export class CreateSecurityStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * A client-generated token that ensures request idempotency, preventing duplicate operations if you retry the request.
   * 
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * The content of the strategy. This value is constrained by the `SecurityStrategySchema`.
   * 
   * This parameter is required.
   */
  content?: CreateSecurityStrategyRequestContent;
  /**
   * @remarks
   * **The control scope. Valid values: Workspace and Tenant.**
   * 
   * This parameter is required.
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * **Control module**
   * 
   * This parameter is required.
   * 
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @remarks
   * **Control submodule**
   * 
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @remarks
   * **Strategy description**
   * 
   * @example
   * 控制数据分析模块的查询结果安全行为
   */
  description?: string;
  /**
   * @remarks
   * **Strategy name**
   * 
   * This parameter is required.
   * 
   * @example
   * 默认数据分析策略
   */
  name?: string;
  /**
   * @remarks
   * **Schema template name**
   * 
   * This parameter is required.
   * 
   * @example
   * DataQuerySecurityStrategySchema
   */
  schemaName?: string;
  /**
   * @remarks
   * A list of associated workspace IDs.
   */
  workspaces?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      content: 'Content',
      controlDwScope: 'ControlDwScope',
      controlModule: 'ControlModule',
      controlSubModule: 'ControlSubModule',
      description: 'Description',
      name: 'Name',
      schemaName: 'SchemaName',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      content: CreateSecurityStrategyRequestContent,
      controlDwScope: 'string',
      controlModule: 'string',
      controlSubModule: 'string',
      description: 'string',
      name: 'string',
      schemaName: 'string',
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

