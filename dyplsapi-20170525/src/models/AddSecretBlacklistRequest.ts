// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSecretBlacklistRequest extends $dara.Model {
  /**
   * @remarks
   * The blacklisted phone number. The value type depends on the **BlackType** parameter:
   * 
   * - **Point-to-point blacklist**: A pair of numbers (A and B numbers) separated by a colon (:).
   * - **Number pool blacklist**: A single number.
   * 
   * >(\\*) is not a wildcard.
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
   * - **POINT_TO_POINT_BLACK**: point-to-point blacklist.
   * - **PARTNER_GLOBAL_NUMBER_BLACK**: number pool blacklist.
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
   * You can obtain the **number pool key** on the [Number Pool Management](https://dyplsnext.console.aliyun.com/number-pool) page in the privacy protection console.
   * 
   * This parameter is required.
   * 
   * @example
   * FC2235****
   */
  poolKey?: string;
  /**
   * @remarks
   * The remarks for the blacklist entry.
   * 
   * @example
   * Blacklist remarks
   */
  remark?: string;
  /**
   * @remarks
   * The call direction control. Valid values:
   * 
   * - **PHONEA_REJECT**: The first number in BlackNo can call the second number, but the second number cannot call the first number.
   * - **PHONEB_REJECT**: The first number in BlackNo cannot call the second number, but the second number can call the first number.
   * - **Not specified**: The two numbers in BlackNo cannot call each other.
   * 
   * >This parameter takes effect only for point-to-point blacklists.
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

