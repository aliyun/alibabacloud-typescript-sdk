// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSecurityStrategyResponseBodySecurityStrategyContentControllers extends $dara.Model {
  /**
   * @example
   * 10000
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
   * 10000
   */
  enterpriseEditionDefaultValue?: any;
  enterpriseEditionIntervalValue?: number[];
  /**
   * @example
   * 10000
   */
  professionalEditionDefaultValue?: any;
  professionalEditionIntervalValue?: number[];
  /**
   * @example
   * 10000
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

export class GetSecurityStrategyResponseBodySecurityStrategyContent extends $dara.Model {
  /**
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  controllers?: GetSecurityStrategyResponseBodySecurityStrategyContentControllers[];
  displayName?: string;
  /**
   * @example
   * Data Query
   */
  displayNameEn?: string;
  /**
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
  content?: GetSecurityStrategyResponseBodySecurityStrategyContent;
  /**
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @example
   * 2026-05-25T20:46:19
   */
  createTime?: string;
  /**
   * @example
   * 203322746501002787
   */
  creator?: string;
  description?: string;
  /**
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 13
   */
  id?: number;
  name?: string;
  /**
   * @example
   * 12
   */
  originPolicyId?: number;
  /**
   * @example
   * DataQuerySecurityStrategySchema
   */
  schemaName?: string;
  /**
   * @example
   * 2026-05-25T20:46:19
   */
  updateTime?: string;
  /**
   * @example
   * 203322746501002787
   */
  updater?: string;
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
   * @example
   * 0bc5df3a17****903790e8e8a
   */
  requestId?: string;
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

