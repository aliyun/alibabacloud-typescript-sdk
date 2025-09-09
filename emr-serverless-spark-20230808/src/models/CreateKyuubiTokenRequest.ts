// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateKyuubiTokenRequestAutoExpireConfiguration extends $dara.Model {
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
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
  autoExpireConfiguration?: CreateKyuubiTokenRequestAutoExpireConfiguration;
  memberArns?: string[];
  /**
   * @example
   * dev_serverless_spark
   */
  name?: string;
  /**
   * @example
   * rjy7ejhej9gkzjjuun49jnx2xk8if2cu
   */
  token?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      autoExpireConfiguration: 'autoExpireConfiguration',
      memberArns: 'memberArns',
      name: 'name',
      token: 'token',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoExpireConfiguration: CreateKyuubiTokenRequestAutoExpireConfiguration,
      memberArns: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
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
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

