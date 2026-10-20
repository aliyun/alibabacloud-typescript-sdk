// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindBestMatchSecurityStrategyResponseBodyDataSecurityStrategyContentControllers extends $dara.Model {
  /**
   * @remarks
   * The **default value for Basic Edition**.
   * 
   * @example
   * 0
   */
  basicEditionDefaultValue?: any;
  /**
   * @remarks
   * The valid value range [min, max] for Basic Edition.
   */
  basicEditionIntervalValue?: number[];
  /**
   * @remarks
   * The identifier of the control item. For valid values, see the control item list for each schema.
   * 
   * @example
   * viewCount
   */
  controller?: string;
  /**
   * @remarks
   * The **value type (Boolean/Integer/Long/String)**.
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
   * Query results - Maximum number of records displayed at a time
   */
  displayName?: string;
  /**
   * @remarks
   * The **English display name**.
   * 
   * @example
   * Query Results - Single Display Record Limit
   */
  displayNameEn?: string;
  /**
   * @remarks
   * Indicates whether the control item is **enabled**.
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
   * The valid value range [min, max] for Enterprise Edition.
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
   * The valid value range [min, max] for Professional Edition.
   */
  professionalEditionIntervalValue?: number[];
  /**
   * @remarks
   * The **default value for Standard Edition**.
   * 
   * @example
   * 10000
   */
  standardEditionDefaultValue?: any;
  /**
   * @remarks
   * The valid value range [min, max] for Standard Edition.
   */
  standardEditionIntervalValue?: number[];
  /**
   * @remarks
   * The **user-configured value. The data type depends on the ControllerValueType**.
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

export class FindBestMatchSecurityStrategyResponseBodyDataSecurityStrategyContent extends $dara.Model {
  /**
   * @remarks
   * The **control scope**.
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * The **control module**.
   * 
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @remarks
   * The **control submodule**.
   * 
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @remarks
   * The list of control items.
   * 
   * Note: Valid control items depend on the selected schema. For more information, see the Controller definition and the control item list for each schema.
   */
  controllers?: FindBestMatchSecurityStrategyResponseBodyDataSecurityStrategyContentControllers[];
  /**
   * @remarks
   * The **display name**.
   * 
   * @example
   * Data Analysis
   */
  displayName?: string;
  /**
   * @remarks
   * The **English display name**.
   * 
   * @example
   * Data Query
   */
  displayNameEn?: string;
  /**
   * @remarks
   * The **schema name**.
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
   * The system policy name. If this parameter is not empty, automatic creation of a default policy is triggered.
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
      controllers: { 'type': 'array', 'itemType': FindBestMatchSecurityStrategyResponseBodyDataSecurityStrategyContentControllers },
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

export class FindBestMatchSecurityStrategyResponseBodyDataSecurityStrategy extends $dara.Model {
  /**
   * @remarks
   * The **policy content**. For more information, see the StrategyContent definition.
   */
  content?: FindBestMatchSecurityStrategyResponseBodyDataSecurityStrategyContent;
  /**
   * @remarks
   * The **control scope** (Workspace/Tenant).
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * The **control module**.
   * 
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @remarks
   * The **control submodule**.
   * 
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @remarks
   * The creation time in the YYYY-MM-DDTHH:mm:ss format. The time zone is not specified in the current document.
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
   * The **policy description**.
   * 
   * @example
   * Controls the security behavior of query results in the Data Analysis module
   */
  description?: string;
  /**
   * @remarks
   * Indicates whether the policy is **enabled**.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The **policy ID**.
   * 
   * @example
   * 16
   */
  id?: number;
  /**
   * @remarks
   * The **policy name**.
   * 
   * @example
   * Default Data Analysis policy
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
   * The **schema template name**.
   * 
   * @example
   * DataQuerySecurityStrategySchema
   */
  schemaName?: string;
  /**
   * @remarks
   * The update time in the YYYY-MM-DDTHH:mm:ss format. The time zone is not specified in the current document.
   * 
   * @example
   * 2026-05-25T20:46:19
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID of the last updater.
   * 
   * @example
   * 207947397706614297
   */
  updater?: string;
  /**
   * @remarks
   * The **list of associated workspace IDs**.
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
      content: FindBestMatchSecurityStrategyResponseBodyDataSecurityStrategyContent,
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

export class FindBestMatchSecurityStrategyResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The purchased DataWorks edition.
   * 
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @remarks
   * The name of the purchased DataWorks edition.
   * 
   * @example
   * Standard Edition
   */
  editionDisplayName?: string;
  /**
   * @remarks
   * The security policy.
   */
  securityStrategy?: FindBestMatchSecurityStrategyResponseBodyDataSecurityStrategy;
  static names(): { [key: string]: string } {
    return {
      edition: 'Edition',
      editionDisplayName: 'EditionDisplayName',
      securityStrategy: 'SecurityStrategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      edition: 'string',
      editionDisplayName: 'string',
      securityStrategy: FindBestMatchSecurityStrategyResponseBodyDataSecurityStrategy,
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

export class FindBestMatchSecurityStrategyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data object.
   */
  data?: FindBestMatchSecurityStrategyResponseBodyData;
  /**
   * @remarks
   * The **API request ID**.
   * 
   * @example
   * 0bc5df3a17***903790e8e8a
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: FindBestMatchSecurityStrategyResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

