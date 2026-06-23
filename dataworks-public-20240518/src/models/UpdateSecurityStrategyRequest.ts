// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecurityStrategyRequestContentControllers extends $dara.Model {
  /**
   * @remarks
   * The default value for the Basic edition.
   * 
   * @example
   * 10000
   */
  basicEditionDefaultValue?: any;
  /**
   * @remarks
   * The value range for the Basic edition, specified as `[min, max]`.
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
   * The data type of the controller\\"s value. Valid values: `Boolean`, `Integer`, `Long`, and `String`.
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
   * Indicates whether the controller is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The default value for the Enterprise edition.
   * 
   * @example
   * 10000
   */
  enterpriseEditionDefaultValue?: any;
  /**
   * @remarks
   * The value range for the Enterprise edition, specified as `[min, max]`.
   */
  enterpriseEditionIntervalValue?: number[];
  /**
   * @remarks
   * The default value for the Professional edition.
   * 
   * @example
   * 10000
   */
  professionalEditionDefaultValue?: any;
  /**
   * @remarks
   * The value range for the Professional edition, specified as `[min, max]`.
   */
  professionalEditionIntervalValue?: number[];
  /**
   * @remarks
   * The default value for the Standard edition.
   * 
   * @example
   * 10000
   */
  standardEditionDefaultValue?: any;
  /**
   * @remarks
   * The value range for the Standard edition, specified as `[min, max]`.
   */
  standardEditionIntervalValue?: number[];
  /**
   * @remarks
   * The user-configured value. The type of this value is determined by the `ControllerValueType` parameter.
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

export class UpdateSecurityStrategyRequestContent extends $dara.Model {
  /**
   * @remarks
   * A list of controllers.
   * 
   * Note: The valid controllers depend on the selected schema. For more information, see the controller definition and the list of controllers for each schema.
   * 
   * This parameter is required.
   */
  controllers?: UpdateSecurityStrategyRequestContentControllers[];
  static names(): { [key: string]: string } {
    return {
      controllers: 'Controllers',
    };
  }

  static types(): { [key: string]: any } {
    return {
      controllers: { 'type': 'array', 'itemType': UpdateSecurityStrategyRequestContentControllers },
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

export class UpdateSecurityStrategyRequest extends $dara.Model {
  /**
   * @remarks
   * A client token to ensure request idempotence.
   * 
   * @example
   * 1AFAE64E-D1BE-432B-A9*****
   */
  clientToken?: string;
  /**
   * @remarks
   * The policy content, which is constrained by the `SecurityStrategySchema`.
   * 
   * This parameter is required.
   */
  content?: UpdateSecurityStrategyRequestContent;
  /**
   * @remarks
   * **The policy description.**
   * 
   * @example
   * 控制数据分析模块的查询结果安全行为
   */
  description?: string;
  /**
   * @remarks
   * **The policy ID.**
   * 
   * This parameter is required.
   * 
   * @example
   * 13
   */
  id?: number;
  /**
   * @remarks
   * **The policy name.**
   * 
   * @example
   * 默认数据分析策略
   */
  name?: string;
  /**
   * @remarks
   * **A list of associated workspace IDs.**
   */
  workspaces?: number[];
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      content: 'Content',
      description: 'Description',
      id: 'Id',
      name: 'Name',
      workspaces: 'Workspaces',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      content: UpdateSecurityStrategyRequestContent,
      description: 'string',
      id: 'number',
      name: 'string',
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

