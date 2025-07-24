// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RefreshLivyComputeTokenRequestAutoExpireConfiguration extends $dara.Model {
  /**
   * @example
   * false
   */
  enable?: boolean;
  /**
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
  autoExpireConfiguration?: RefreshLivyComputeTokenRequestAutoExpireConfiguration;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * fe86812667f04v343
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

