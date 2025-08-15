// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class CredentialVerifyIntlAdvanceRequest extends $dara.Model {
  /**
   * @remarks
   * Credential name (numeric code):
   * 
   * - Starting with 03: Enterprise Qualification
   *   - 0301: Mainland China Business License
   * - Starting with 04, Transaction Voucher
   *   - 0401: Bank Statement
   *   - 0402: Pay Slip
   *   - 0403: Utility Bill
   *   - 0405: Credit Card Statement
   *   - 0499: Others
   * 
   * This parameter is required.
   * 
   * @example
   * 0301
   */
  credName?: string;
  /**
   * @remarks
   * Credential type:
   * 
   * - 03: Enterprise Qualification
   * - 04: Transaction Voucher
   * 
   * This parameter is required.
   * 
   * @example
   * 03
   */
  credType?: string;
  /**
   * @remarks
   * Image input stream.
   * > Choose either ImageUrl or ImageFile.
   * 
   * @example
   * 无
   */
  imageFileObject?: Readable;
  /**
   * @remarks
   * The URL of the image.
   * > Choose either ImageUrl or ImageFile.
   * 
   * @example
   * https://oss-bj01.avic.com/eavic-prod-commodity/pic/commodity/94677ee6-1067-4287-8ff4-6e030ef3a5a8.jpg
   */
  imageUrl?: string;
  /**
   * @remarks
   * Invocation mode:
   * - ANTI_FAKE_CHECK: Image quality and tampering detection.
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
      imageFileObject: 'ImageFile',
      imageUrl: 'ImageUrl',
      productCode: 'ProductCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credName: 'string',
      credType: 'string',
      imageFileObject: 'Readable',
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

