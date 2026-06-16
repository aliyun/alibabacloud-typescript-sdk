// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLivyComputeTokenRequestAutoExpireConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the token automatically expires.
   * 
   * - true: Yes.
   * 
   * - false: No.
   * 
   * @example
   * false
   */
  enable?: boolean;
  /**
   * @remarks
   * The expiration period in days.
   * 
   * @example
   * 7
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

export class CreateLivyComputeTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The token expiration information struct.
   */
  autoExpireConfiguration?: CreateLivyComputeTokenRequestAutoExpireConfiguration;
  /**
   * @remarks
   * The token name.
   * 
   * @example
   * mytoken
   */
  name?: string;
  /**
   * @remarks
   * The token content. The length must be 16 or more characters.
   * 
   * @example
   * gs3fy75w4o7hqe5s
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
      name: 'name',
      token: 'token',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoExpireConfiguration: CreateLivyComputeTokenRequestAutoExpireConfiguration,
      name: 'string',
      token: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(this.autoExpireConfiguration && typeof (this.autoExpireConfiguration as any).validate === 'function') {
      (this.autoExpireConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

