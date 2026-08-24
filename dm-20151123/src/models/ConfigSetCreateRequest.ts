// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetCreateRequestValidationOption extends $dara.Model {
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

export class ConfigSetCreateRequest extends $dara.Model {
  /**
   * @remarks
   * The description. The description can be up to 50 characters in length.
   * 
   * @example
   * XXX
   */
  description?: string;
  /**
   * @remarks
   * The ID of the associated IP pool. This parameter is optional.
   * 
   * @example
   * XXX
   */
  ipPoolId?: string;
  isPublicChannelBackoff?: boolean;
  /**
   * @remarks
   * The configuration name. This parameter is required. The name can be up to 50 characters in length and must be unique.
   * 
   * @example
   * XXX
   */
  name?: string;
  /**
   * **if can be null:**
   * false
   */
  validationOption?: ConfigSetCreateRequestValidationOption;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ipPoolId: 'IpPoolId',
      isPublicChannelBackoff: 'IsPublicChannelBackoff',
      name: 'Name',
      validationOption: 'ValidationOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ipPoolId: 'string',
      isPublicChannelBackoff: 'boolean',
      name: 'string',
      validationOption: ConfigSetCreateRequestValidationOption,
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

