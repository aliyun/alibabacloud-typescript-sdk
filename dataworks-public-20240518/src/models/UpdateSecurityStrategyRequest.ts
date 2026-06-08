// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSecurityStrategyRequestContentControllers extends $dara.Model {
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
   * @example
   * 1AFAE64E-D1BE-432B-A9*****
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  content?: UpdateSecurityStrategyRequestContent;
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 13
   */
  id?: number;
  name?: string;
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

