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
   * The valid value range for Basic Edition, in the format of [min, max].
   */
  basicEditionIntervalValue?: number[];
  /**
   * @remarks
   * The identifier of the control item. For valid values, refer to the control item list for each schema.
   * 
   * @example
   * viewCount
   */
  controller?: string;
  /**
   * @remarks
   * The value type. Valid values: Boolean, Integer, Long, and String.
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
   * Query results - Maximum number of records displayed per query
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
   * Specifies whether to enable the control item.
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
   * The valid value range for Enterprise Edition, in the format of [min, max].
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
   * The valid value range for Professional Edition, in the format of [min, max].
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
   * The valid value range for Standard Edition, in the format of [min, max].
   */
  standardEditionIntervalValue?: number[];
  /**
   * @remarks
   * The user-configured value. The type depends on `ControllerValueType`.
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
   * The control scope. This is the name of the SecurityStrategySchema associated with the current policy.
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * The control module. This is the controlModule of the SecurityStrategySchema associated with the current policy.
   * 
   * This parameter is required.
   * 
   * @example
   * DataStudio
   */
  controlModule?: string;
  /**
   * @remarks
   * The control submodule. This is the controlSubModule of the SecurityStrategySchema associated with the current policy.
   * 
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @remarks
   * The list of control items.
   * 
   * Note: Valid control items depend on the selected schema. Refer to the controller definitions and the control item list for each schema.
   */
  controllers?: CreateSecurityStrategyRequestContentControllers[];
  /**
   * @remarks
   * The display name of the SecurityStrategySchema associated with the current policy.
   * 
   * @example
   * Data analysis
   */
  displayName?: string;
  /**
   * @remarks
   * The English display name of the SecurityStrategySchema associated with the current policy.
   * 
   * @example
   * Data Analysis
   */
  displayNameEn?: string;
  /**
   * @remarks
   * The name of the SecurityStrategySchema associated with the current policy.
   * 
   * This parameter is required.
   * 
   * @example
   * DataQuerySecurityStrategySchema
   */
  name?: string;
  /**
   * @remarks
   * The name of the SecurityStrategySchema associated with the current policy.
   * 
   * @example
   * Default system generate data query policy
   */
  systemPolicyDisplayName?: string;
  /**
   * @remarks
   * The name of the SecurityStrategySchema associated with the current policy.
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
   * The idempotency parameter. This parameter is used to prevent duplicate operations caused by multiple calls.
   * 
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * The policy content. The content is constrained by SecurityStrategySchema.
   * 
   * This parameter is required.
   */
  content?: CreateSecurityStrategyRequestContent;
  /**
   * @remarks
   * The control scope.
   * 
   * This parameter is required.
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * The control module.
   * 
   * This parameter is required.
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
   * The description of the policy.
   * 
   * @example
   * Controls the security behavior of query results in the data analysis module
   */
  description?: string;
  /**
   * @remarks
   * The policy name.
   * 
   * This parameter is required.
   * 
   * @example
   * Default data analysis policy
   */
  name?: string;
  /**
   * @remarks
   * The name of the schema template.
   * 
   * This parameter is required.
   * 
   * @example
   * DataQuerySecurityStrategySchema
   */
  schemaName?: string;
  /**
   * @remarks
   * The list of associated workspace IDs.
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

