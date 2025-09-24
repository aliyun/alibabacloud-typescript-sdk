// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRedeemRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the redemption coupon takes effect. Valid values:
   * 
   * *   true
   * *   false
   * 
   * Default value: false.
   * 
   * @example
   * true
   */
  effectiveOrNot?: boolean;
  /**
   * @remarks
   * The end time when the redemption coupon expires. The value must be in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2018-08-01T00:00:00Z
   */
  expiryTimeEnd?: string;
  /**
   * @remarks
   * The start time when the redemption coupon expires. The value must be in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2018-08-01T00:00:00Z
   */
  expiryTimeStart?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      effectiveOrNot: 'EffectiveOrNot',
      expiryTimeEnd: 'ExpiryTimeEnd',
      expiryTimeStart: 'ExpiryTimeStart',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectiveOrNot: 'boolean',
      expiryTimeEnd: 'string',
      expiryTimeStart: 'string',
      pageNum: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

