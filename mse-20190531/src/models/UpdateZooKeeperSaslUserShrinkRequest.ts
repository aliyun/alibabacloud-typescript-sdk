// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateZooKeeperSaslUserShrinkRequest extends $dara.Model {
  /**
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-tl327w****
   */
  instanceId?: string;
  /**
   * @example
   * true
   */
  reload?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  saslUserShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      reload: 'Reload',
      saslUserShrink: 'SaslUser',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      reload: 'boolean',
      saslUserShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

