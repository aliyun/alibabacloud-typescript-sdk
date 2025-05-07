// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSecretBlacklistRequest extends $dara.Model {
  /**
   * @remarks
   * The numbers in the blacklist. A point-to-point blacklist has a pair of numbers separated by a colon (:). A number pool blacklist has only one single number.
   * 
   * >  The asterisks (\\*) in the sample value are not wildcards.
   * 
   * This parameter is required.
   * 
   * @example
   * 1825638****:1825248****
   */
  blackNo?: string;
  /**
   * @remarks
   * The blacklist type. Valid values:
   * 
   * *   **POINT_TO_POINT_BLACK**: point-to-point blacklist.
   * *   **PARTNER_GLOBAL_NUMBER_BLACK**: number pool blacklist.
   * 
   * This parameter is required.
   * 
   * @example
   * POINT_TO_POINT_BLACK
   */
  blackType?: string;
  /**
   * @remarks
   * The key of the phone number pool.
   * 
   * Log on to the [Phone Number Protection console](https://dypls.console.aliyun.com/dypls.htm#/account) and view the key of the phone number pool on the Number Pool Management page.
   * 
   * This parameter is required.
   * 
   * @example
   * FC2235****
   */
  poolKey?: string;
  /**
   * @remarks
   * The blacklist remarks.
   * 
   * @example
   * Customer service feedback
   */
  remark?: string;
  /**
   * @remarks
   * The control on the call direction.
   * 
   * *   **PHONEA_REJECT**: The first number in the blacklist can be used to call the second number, but the second number cannot be used to call the first number.
   * *   **PHONEB_REJECT**: The first number in the blacklist cannot be used to call the second number, but the second number can be used to call the first number.
   * *   If this parameter is left empty, the two numbers in the blacklist cannot be used to call each other.
   * 
   * >  This parameter is available only for a point-to-point blacklist.
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

