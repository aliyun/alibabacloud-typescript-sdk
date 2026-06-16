// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKyuubiTokenRequestAutoExpireConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the token automatically expires.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The expiration period in days.
   * 
   * @example
   * 365
   */
  expireDays?: number;
  static names(): { [key: string]: string } {
    return {
      enable: 'enable',
      expireDays: 'expireDays',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      expireDays: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateKyuubiTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The automatic expiration settings.
   */
  autoExpireConfiguration?: CreateKyuubiTokenRequestAutoExpireConfiguration;
  /**
   * @remarks
   * The list of ARNs of authorized users.
   */
  memberArns?: string[];
  /**
   * @remarks
   * The token name.
   * 
   * @example
   * dev_serverless_spark
   */
  name?: string;
  sparkRole?: string[];
  /**
   * @remarks
   * The token content. The token must be 32 characters long and contain only lowercase letters and digits.
   * 
   * @example
   * rjy7ejhej9gkzjjuun49jnx2xk8if2cu
   */
  token?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoExpireConfiguration: 'autoExpireConfiguration',
      memberArns: 'memberArns',
      name: 'name',
      sparkRole: 'sparkRole',
      token: 'token',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoExpireConfiguration: CreateKyuubiTokenRequestAutoExpireConfiguration,
      memberArns: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      sparkRole: { 'type': 'array', 'itemType': 'string' },
      token: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.autoExpireConfiguration && typeof (this.autoExpireConfiguration as any).validate === 'function') {
      (this.autoExpireConfiguration as any).validate();
    }
    if(Array.isArray(this.memberArns)) {
      $dara.Model.validateArray(this.memberArns);
    }
    if(Array.isArray(this.sparkRole)) {
      $dara.Model.validateArray(this.sparkRole);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

