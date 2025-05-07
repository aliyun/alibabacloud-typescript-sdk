// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecretBlacklistRequest extends $dara.Model {
  /**
   * @remarks
   * The phone numbers in the blacklist. A point-to-point blacklist has a pair of numbers separated by a colon (":"). A number pool blacklist or a platform blacklist has only one single number.
   * 
   * This parameter is required.
   * 
   * @example
   * 18252***383:18252***483
   */
  blackNo?: string;
  /**
   * @remarks
   * The blacklist type. Valid values:
   * 
   * *   **POINT_TO_POINT_BLACK**: point-to-point blacklist
   * *   **PARTNER_GLOBAL_NUMBER_BLACK**: number pool blacklist
   * 
   * This parameter is required.
   * 
   * @example
   * POINT_TO_POINT_BLACK
   */
  blackType?: string;
  /**
   * @remarks
   * The key of the phone number pool. Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the **Number Pool Management** page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC1232****
   */
  poolKey?: string;
  /**
   * @remarks
   * The remarks for the blacklist.
   * 
   * @example
   * fragile
   */
  remark?: string;
  /**
   * @remarks
   * The control on the call direction.
   * 
   * *   **PHONEA_REJECT**: The first phone number in the blacklist can be used to call the second phone number, but the second phone number in the blacklist cannot be used to call the first phone number.
   * *   **PHONEB_REJECT**: The first phone number in the blacklist cannot be used to call the second phone number, but the second phone number in the blacklist can be used to call the first phone number.
   * *   If this parameter is not specified, the two phone numbers in the blacklist cannot be used to call each other.
   * 
   * Valid values:
   * 
   * *   DUPLEX_REJECT
   * *   PHONEA_REJECT
   * *   PHONEB_REJECT
   * 
   * @example
   * PHONEA_REJECT
   */
  wayControl?: string;
  static names(): { [key: string]: string } {
    return {
      blackNo: 'BlackNo',
      blackType: 'BlackType',
      poolKey: 'PoolKey',
      remark: 'Remark',
      wayControl: 'WayControl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      blackNo: 'string',
      blackType: 'string',
      poolKey: 'string',
      remark: 'string',
      wayControl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

