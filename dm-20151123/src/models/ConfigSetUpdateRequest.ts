// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetUpdateRequestValidationOption extends $dara.Model {
  enabled?: boolean;
  forbiddenStatusList?: string[];
  forbiddenSubStatusList?: string[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      forbiddenStatusList: 'ForbiddenStatusList',
      forbiddenSubStatusList: 'ForbiddenSubStatusList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      forbiddenStatusList: { 'type': 'array', 'itemType': 'string' },
      forbiddenSubStatusList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.forbiddenStatusList)) {
      $dara.Model.validateArray(this.forbiddenStatusList);
    }
    if(Array.isArray(this.forbiddenSubStatusList)) {
      $dara.Model.validateArray(this.forbiddenSubStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSetUpdateRequest extends $dara.Model {
  /**
   * @remarks
   * The description. Maximum length: 50 characters.
   * 
   * @example
   * XXX
   */
  description?: string;
  /**
   * @remarks
   * The configuration set ID. This parameter is required.
   * 
   * @example
   * XXX
   */
  id?: string;
  /**
   * @remarks
   * The associated IP pool ID. This parameter is optional.
   * 
   * @example
   * XXX
   */
  ipPoolId?: string;
  isPublicChannelBackoff?: boolean;
  /**
   * @remarks
   * The configuration name. This parameter is required. Maximum length: 50 characters. The name must be unique.
   * 
   * @example
   * XXX
   */
  name?: string;
  validationOption?: ConfigSetUpdateRequestValidationOption;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      ipPoolId: 'IpPoolId',
      isPublicChannelBackoff: 'IsPublicChannelBackoff',
      name: 'Name',
      validationOption: 'ValidationOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      ipPoolId: 'string',
      isPublicChannelBackoff: 'boolean',
      name: 'string',
      validationOption: ConfigSetUpdateRequestValidationOption,
    };
  }

  validate() {
    if(this.validationOption && typeof (this.validationOption as any).validate === 'function') {
      (this.validationOption as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

