// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCashCouponsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the voucher takes effect. Valid values:
   * 
   * *   true: The voucher takes effect.
   * *   false: The voucher does not take effect.
   * 
   * @example
   * true
   */
  effectiveOrNot?: boolean;
  /**
   * @remarks
   * The end time of the validity period of the voucher. Specify the parameter in the yyyy-MM-ddTHH:mm:ssZ format. Example: 2018-08-01T00:00:00Z.
   * 
   * @example
   * 2018-08-01T00:00:00Z
   */
  expiryTimeEnd?: string;
  /**
   * @remarks
   * The start time of the validity period of the voucher. Specify the parameter in the yyyy-MM-ddTHH:mm:ssZ format. Example: 2018-08-01T00:00:00Z.
   * 
   * @example
   * 2018-08-01T00:00:00Z
   */
  expiryTimeStart?: string;
  static names(): { [key: string]: string } {
    return {
      effectiveOrNot: 'EffectiveOrNot',
      expiryTimeEnd: 'ExpiryTimeEnd',
      expiryTimeStart: 'ExpiryTimeStart',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveOrNot: 'boolean',
      expiryTimeEnd: 'string',
      expiryTimeStart: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

