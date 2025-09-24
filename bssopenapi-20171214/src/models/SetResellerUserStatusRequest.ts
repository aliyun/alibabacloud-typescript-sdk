// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetResellerUserStatusRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the business. Valid values: FREEZE: the frozen business of the account. TRUSTEESHIP: the hosted business of the account.
   * 
   * This parameter is required.
   * 
   * @example
   * FREEZE
   */
  businessType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  ownerId?: string;
  /**
   * @remarks
   * The account status that you want to set. Valid values: Freeze: The account is frozen. Thaw: The account is unfrozen. Trusteeship: The account is hosted. TrusteeshipCancel: The account is not hosted.
   * 
   * This parameter is required.
   * 
   * @example
   * Freeze
   */
  status?: string;
  /**
   * @remarks
   * 停机模式
   * 取值：
   *     0：普通停机
   *     1：立即停机
   * 
   * @example
   * 0
   */
  stopMode?: string;
  static names(): { [key: string]: string } {
    return {
      businessType: 'BusinessType',
      ownerId: 'OwnerId',
      status: 'Status',
      stopMode: 'StopMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessType: 'string',
      ownerId: 'string',
      status: 'string',
      stopMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

