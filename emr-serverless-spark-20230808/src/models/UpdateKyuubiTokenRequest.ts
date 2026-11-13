// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateKyuubiTokenRequestAutoExpireConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether automatic expiration is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The expiration time in days.
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

export class UpdateKyuubiTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The auto-expiration configuration struct.
   */
  autoExpireConfiguration?: UpdateKyuubiTokenRequestAutoExpireConfiguration;
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
  /**
   * @remarks
   * The list of Spark roles associated with the token.
   */
  sparkRole?: string[];
  /**
   * @remarks
   * The token content, which must be 32 characters in length and contain only lowercase letters and digits.
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
      autoExpireConfiguration: UpdateKyuubiTokenRequestAutoExpireConfiguration,
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

