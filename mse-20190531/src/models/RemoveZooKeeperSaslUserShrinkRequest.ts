// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveZooKeeperSaslUserShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the returned results. Valid values: zh (default): Chinese, en: English.
   * 
   * @example
   * zh
   */
  acceptLanguage?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * mse_prepaid_public_cn-****
   */
  instanceId?: string;
  /**
   * @remarks
   * Specifies whether the changes take effect immediately.
   * 
   * @example
   * true
   */
  reload?: boolean;
  /**
   * @remarks
   * The list of usernames to remove.
   * 
   * This parameter is required.
   */
  userNamesShrink?: string;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      reload: 'Reload',
      userNamesShrink: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      reload: 'boolean',
      userNamesShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

