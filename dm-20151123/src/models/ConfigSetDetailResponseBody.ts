// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetDetailResponseBodyDetailIpPool extends $dara.Model {
  /**
   * @remarks
   * The associated IP pool ID.
   * 
   * @example
   * xxx
   */
  ipPoolId?: string;
  /**
   * @remarks
   * The associated IP pool name.
   * 
   * @example
   * xxx
   */
  ipPoolName?: string;
  static names(): { [key: string]: string } {
    return {
      ipPoolId: 'IpPoolId',
      ipPoolName: 'IpPoolName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipPoolId: 'string',
      ipPoolName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSetDetailResponseBodyDetailValidationOption extends $dara.Model {
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

export class ConfigSetDetailResponseBodyDetail extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * xxx
   */
  description?: string;
  /**
   * @remarks
   * The configuration set ID.
   * 
   * @example
   * xxx
   */
  id?: string;
  /**
   * @remarks
   * The associated IP pool.
   */
  ipPool?: ConfigSetDetailResponseBodyDetailIpPool;
  isPublicChannelBackoff?: boolean;
  /**
   * @remarks
   * The configuration set name.
   * 
   * @example
   * xxx
   */
  name?: string;
  validationOption?: ConfigSetDetailResponseBodyDetailValidationOption;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      ipPool: 'IpPool',
      isPublicChannelBackoff: 'IsPublicChannelBackoff',
      name: 'Name',
      validationOption: 'ValidationOption',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      ipPool: ConfigSetDetailResponseBodyDetailIpPool,
      isPublicChannelBackoff: 'boolean',
      name: 'string',
      validationOption: ConfigSetDetailResponseBodyDetailValidationOption,
    };
  }

  validate() {
    if(this.ipPool && typeof (this.ipPool as any).validate === 'function') {
      (this.ipPool as any).validate();
    }
    if(this.validationOption && typeof (this.validationOption as any).validate === 'function') {
      (this.validationOption as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ConfigSetDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration set information.
   */
  detail?: ConfigSetDetailResponseBodyDetail;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xxx
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      detail: 'Detail',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: ConfigSetDetailResponseBodyDetail,
      requestId: 'string',
    };
  }

  validate() {
    if(this.detail && typeof (this.detail as any).validate === 'function') {
      (this.detail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

