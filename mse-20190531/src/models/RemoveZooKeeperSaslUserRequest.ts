// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveZooKeeperSaslUserRequest extends $dara.Model {
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
  userNames?: string[];
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      instanceId: 'InstanceId',
      reload: 'Reload',
      userNames: 'UserNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      instanceId: 'string',
      reload: 'boolean',
      userNames: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.userNames)) {
      $dara.Model.validateArray(this.userNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

