// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The credential name (specified as a numeric code). Valid values:
   * 
   * - Codes starting with 03: enterprise qualification
   *   - 0301: business license issued in the Chinese mainland
   * - Codes starting with 04: transaction voucher
   *   - 0401: bank statement
   *   - 0402: payslip
   *   - 0403: utility bill
   *   - 0405: credit card statement
   *   - 0499: other.
   * 
   * This parameter is required.
   * 
   * @example
   * 0301
   */
  credName?: string;
  /**
   * @remarks
   * The credential type. Valid values:
   * 
   * - 03: enterprise qualification
   * - 04: transaction voucher.
   * 
   * This parameter is required.
   * 
   * @example
   * 03
   */
  credType?: string;
  /**
   * @remarks
   * The image input stream.
   * > Specify either ImageUrl or ImageFile.
   * 
   * @example
   * 无
   */
  imageFile?: string;
  /**
   * @remarks
   * The URL of the image.
   * > Specify either ImageUrl or ImageFile.
   * 
   * @example
   * https://oss-bj01.avic.com/eavic-prod-commodity/pic/commodity/94677ee6-1067-4287-8ff4-6e030ef3a5a8.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * The call mode. Valid values:
   * - ANTI_FAKE_CHECK: image quality and tampering detection.
   * 
   * This parameter is required.
   * 
   * @example
   * 取值：ANTI_FAKE_CHECK
   */
  productCode?: string;
  static names(): { [key: string]: string } {
    return {
      credName: 'CredName',
      credType: 'CredType',
      imageFile: 'ImageFile',
      imageUrl: 'ImageUrl',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credName: 'string',
      credType: 'string',
      imageFile: 'string',
      imageUrl: 'string',
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

