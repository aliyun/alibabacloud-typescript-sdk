// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaceGuardRiskRequest extends $dara.Model {
  /**
   * @remarks
   * Authentication ID
   * 
   * @example
   * aba9830f471a4335af4612c8adaa91b0
   */
  bizId?: string;
  /**
   * @remarks
   * Risk identification - device token.
   * 
   * @example
   * McozS1ZWRcRZStlERcZZo_QOytx5jcgZoZJEoRLOxxxxxxx
   */
  deviceToken?: string;
  /**
   * @remarks
   * This identifier is used for subsequent troubleshooting, and you need to ensure that this value is unique in your business.
   * 
   * Supports the use of English letters (including uppercase and lowercase) and numbers, with a maximum length of 32 characters.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35xxxx
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * Product code, fixed value: FACE_GUARD
   * 
   * @example
   * FACE_GUARD
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      deviceToken: 'DeviceToken',
      outerOrderNo: 'OuterOrderNo',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      deviceToken: 'string',
      outerOrderNo: 'string',
      productCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

