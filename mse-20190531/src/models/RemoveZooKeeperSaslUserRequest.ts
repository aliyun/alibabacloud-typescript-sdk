// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveZooKeeperSaslUserRequest extends $dara.Model {
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
   * mse_prepaid_public_cn-****
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

