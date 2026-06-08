// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSecurityStrategyRequestContentControllers extends $dara.Model {
  /**
   * @example
   * 0
   */
  basicEditionDefaultValue?: any;
  basicEditionIntervalValue?: number[];
  /**
   * @example
   * viewCount
   */
  controller?: string;
  /**
   * @example
   * Integer
   */
  controllerValueType?: string;
  displayName?: string;
  /**
   * @example
   * Query Results - Single Display Record Limit
   */
  displayNameEn?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 500000
   */
  enterpriseEditionDefaultValue?: any;
  enterpriseEditionIntervalValue?: number[];
  /**
   * @example
   * 200000
   */
  professionalEditionDefaultValue?: any;
  professionalEditionIntervalValue?: number[];
  /**
   * @example
   * 100000
   */
  standardEditionDefaultValue?: any;
  standardEditionIntervalValue?: number[];
  /**
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
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DataStudio
   */
  controlModule?: string;
  /**
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  controllers?: CreateSecurityStrategyRequestContentControllers[];
  displayName?: string;
  /**
   * @example
   * Data Analysis
   */
  displayNameEn?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DataQuerySecurityStrategySchema
   */
  name?: string;
  /**
   * @example
   * Default system generate data query policy
   */
  systemPolicyDisplayName?: string;
  /**
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
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: CreateSecurityStrategyRequestContent;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * DataQuerySecurityStrategySchema
   */
  schemaName?: string;
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

