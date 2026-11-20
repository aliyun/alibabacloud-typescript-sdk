// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSecretBlacklistRequest extends $dara.Model {
  /**
   * @remarks
   * The blacklisted number. The value type is determined by the **BlackType** parameter:
   * 
   * - **Point-to-point blacklist**: a pair of numbers separated by a colon (:)
   * - **Number pool blacklist**: a single number
   * 
   * This parameter is required.
   * 
   * @example
   * 1825****383:1825****483
   */
  blackNo?: string;
  /**
   * @remarks
   * The type of the blacklist. Valid values:
   * 
   * - **POINT_TO_POINT_BLACK**: point-to-point blacklist
   * - **PARTNER_GLOBAL_NUMBER_BLACK**: number pool blacklist
   * 
   * This parameter is required.
   * 
   * @example
   * POINT_TO_POINT_BLACK
   */
  blackType?: string;
  /**
   * @remarks
   * The key of the number pool.
   * 
   * You can obtain the **number pool key** on the [Number Pool Management](https://dyplsnext.console.aliyun.com/number-pool) page in the Phone Number Privacy Protection console.
   * 
   * This parameter is required.
   * 
   * @example
   * FC1232****
   */
  poolKey?: string;
  /**
   * @remarks
   * The remark for the blacklist.
   * 
   * @example
   * Blacklist remark
   */
  remark?: string;
  /**
   * @remarks
   * The call direction control. Valid values:
   * 
   * - **PHONEA_REJECT**: The first number in BlackNo can call the second number, but the second number cannot call the first number.
   * 
   * - **PHONEB_REJECT**: The first number in BlackNo cannot call the second number, but the second number can call the first number.
   * 
   * - **Leave empty**: The two numbers in BlackNo cannot call each other.
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

