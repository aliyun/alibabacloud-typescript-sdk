// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaceGuardRiskRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication ID.
   * 
   * @example
   * aba9830f471a4335af4612c8adaa91b0
   */
  bizId?: string;
  /**
   * @remarks
   * The device token for risk identification.
   * 
   * @example
   * McozS1ZWRcRZStlERcZZo_QOytx5jcgZoZJEoRLOxxxxxxx
   */
  deviceToken?: string;
  /**
   * @remarks
   * The identifier used for subsequent troubleshooting. Ensure that this value is unique within your business.
   * 
   * The value can contain letters (both uppercase and lowercase) and digits, with a maximum length of 32 characters.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35xxxx
   */
  outerOrderNo?: string;
  /**
   * @remarks
   * The product code. Set this to FACE_GUARD.
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

