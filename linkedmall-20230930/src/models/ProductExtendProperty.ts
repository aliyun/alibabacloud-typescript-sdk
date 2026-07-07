// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ProductExtendProperty extends $dara.Model {
  /**
   * @remarks
   * The property key.
   * 
   * > Valid values:
   * >
   * > - - `ss_picture_scene` (scene picture)
   * >
   * > - - `ss_picture_white_background` (white background picture)
   * >
   * > - - `extraPeriod` (shelf life)
   * >
   * > - - `itemBoundaryInventoryZeroTag` (Reserved. Ignore this parameter.)
   * >
   * > - - `shoppingShowTitle` (shopping guide title)
   * >
   * > - - `itemCCStatus` (Reserved. Ignore this parameter.)
   * >
   * > - - `brandLogo` (brand logo)
   * >
   * > - - `multipleBuyLimit` (purchase multiple)
   * >
   * > - - `eticket_type` (electronic coupon type)
   * >
   * > - - `eticket_upper_buy_limit` (maximum purchase quantity of electronic coupons per order)
   * >
   * > - - `validity_type` (validity period type of electronic coupon)
   * >
   * > - - `etc_expiry_date` (Validity period of the electronic coupon. Valid only when `validity_type` is `1`.)
   * >
   * > - - `etc_duration_date` (Validity period of the electronic coupon. Valid only when `validity_type` is `2`, `3`, or `5`.)
   * >
   * > - - `f_refund` (Automatic refund ratio for valid electronic coupons)
   * >
   * > - - `refund` (automatic refund ratio for expired electronic coupons)
   * >
   * > - - `writeoff` (Reserved. Ignore this parameter.)
   * 
   * @example
   * ss_picture_scene
   */
  key?: string;
  /**
   * @remarks
   * The property value.
   * 
   * @example
   * 场景图
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

