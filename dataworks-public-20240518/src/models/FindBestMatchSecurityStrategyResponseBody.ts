// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FindBestMatchSecurityStrategyResponseBodyDataSecurityStrategyContentControllers extends $dara.Model {
  /**
   * @remarks
   * **Basic Edition default value**
   * 
   * @example
   * 0
   */
  basicEditionDefaultValue?: any;
  /**
   * @remarks
   * Basic Edition valid value range [min, max].
   */
  basicEditionIntervalValue?: number[];
  /**
   * @remarks
   * Controller identifier. For values, see the controller list of each Schema.
   * 
   * @example
   * viewCount
   */
  controller?: string;
  /**
   * @remarks
   * **Value type (Boolean/Integer/Long/String)**
   * 
   * @example
   * Integer
   */
  controllerValueType?: string;
  /**
   * @remarks
   * Display name.
   * 
   * @example
   * 查询结果-单次展示记录值上限
   */
  displayName?: string;
  /**
   * @remarks
   * **English display name**
   * 
   * @example
   * Query Results - Single Display Record Limit
   */
  displayNameEn?: string;
  /**
   * @remarks
   * **Whether this controller is enabled**
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * Enterprise Edition default value.
   * 
   * @example
   * 500000
   */
  enterpriseEditionDefaultValue?: any;
  /**
   * @remarks
   * Enterprise Edition valid value range [min, max].
   */
  enterpriseEditionIntervalValue?: number[];
  /**
   * @remarks
   * Professional Edition default value.
   * 
   * @example
   * 200000
   */
  professionalEditionDefaultValue?: any;
  /**
   * @remarks
   * Professional Edition valid value range [min, max].
   */
  professionalEditionIntervalValue?: number[];
  /**
   * @remarks
   * **Standard Edition default value**
   * 
   * @example
   * 10000
   */
  standardEditionDefaultValue?: any;
  /**
   * @remarks
   * Standard Edition valid value range [min, max].
   */
  standardEditionIntervalValue?: number[];
  /**
   * @remarks
   * **User-configured value. The type depends on ControllerValueType.**
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
   * **Control scope**
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * **Control module**
   * 
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @remarks
   * **Control sub-module**
   * 
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @remarks
   * Controller list.
   * 
   * Note: Valid controllers depend on the selected Schema. Refer to the Controller definition and the controller list of each Schema.
   */
  controllers?: FindBestMatchSecurityStrategyResponseBodyDataSecurityStrategyContentControllers[];
  /**
   * @remarks
   * **Display name**
   * 
   * @example
   * 数据分析
   */
  displayName?: string;
  /**
   * @remarks
   * **English display name**
   * 
   * @example
   * Data Query
   */
  displayNameEn?: string;
  /**
   * @remarks
   * **Schema name**
   * 
   * @example
   * DataQuerySecurityStrategySchema
   */
  name?: string;
  /**
   * @remarks
   * System policy display name.
   * 
   * @example
   * Default system generate data query policy
   */
  systemPolicyDisplayName?: string;
  /**
   * @remarks
   * System policy name (when not empty, the system automatically creates a default policy).
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
   * **Policy content**. Refer to the StrategyContent definition.
   */
  content?: FindBestMatchSecurityStrategyResponseBodyDataSecurityStrategyContent;
  /**
   * @remarks
   * **Control scope** (Workspace/Tenant).
   * 
   * @example
   * Tenant
   */
  controlDwScope?: string;
  /**
   * @remarks
   * **Control module**
   * 
   * @example
   * DataQuery
   */
  controlModule?: string;
  /**
   * @remarks
   * **Control sub-module**
   * 
   * @example
   * MyCatalog
   */
  controlSubModule?: string;
  /**
   * @remarks
   * Creation time.
   * 
   * @example
   * 2026-05-25T20:46:19
   */
  createTime?: string;
  /**
   * @remarks
   * Creator user ID.
   * 
   * @example
   * 203322746501002787
   */
  creator?: string;
  /**
   * @remarks
   * **Policy description**
   * 
   * @example
   * 控制数据分析模块的查询结果安全行为
   */
  description?: string;
  /**
   * @remarks
   * **Whether enabled**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * **Policy ID**
   * 
   * @example
   * 16
   */
  id?: number;
  /**
   * @remarks
   * **Policy name**
   * 
   * @example
   * 默认数据分析策略
   */
  name?: string;
  /**
   * @remarks
   * System default policy source ID.
   * 
   * @example
   * 12
   */
  originPolicyId?: number;
  /**
   * @remarks
   * **Schema template name**
   * 
   * @example
   * DataQuerySecurityStrategySchema
   */
  schemaName?: string;
  /**
   * @remarks
   * Update time.
   * 
   * @example
   * 2026-05-25T20:46:19
   */
  updateTime?: string;
  /**
   * @remarks
   * Last updater user ID.
   * 
   * @example
   * 207947397706614297
   */
  updater?: string;
  /**
   * @remarks
   * **Associated workspace ID list**
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
   * Purchased DataWorks edition.
   * 
   * @example
   * STANDARD
   */
  edition?: string;
  /**
   * @remarks
   * Purchased DataWorks edition name.
   * 
   * @example
   * 标准版
   */
  editionDisplayName?: string;
  /**
   * @remarks
   * Security policy.
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
   * Data object.
   */
  data?: FindBestMatchSecurityStrategyResponseBodyData;
  /**
   * @remarks
   * **API request ID**
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

