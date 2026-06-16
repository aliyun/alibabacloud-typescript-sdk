// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshLivyComputeTokenRequestAutoExpireConfiguration extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the token automatically expires.
   * 
   * - true: The token automatically expires.
   * 
   * - false: The token does not automatically expire.
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

export class RefreshLivyComputeTokenRequest extends $dara.Model {
  /**
   * @remarks
   * The information about token expiration.
   */
  autoExpireConfiguration?: RefreshLivyComputeTokenRequestAutoExpireConfiguration;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The token must be 16 or more characters in length.
   * 
   * @example
   * fe86812667f04v343
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
      autoExpireConfiguration: RefreshLivyComputeTokenRequestAutoExpireConfiguration,
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

