// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaPeriodVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * 张三
   */
  docName?: string;
  /**
   * @remarks
   * The document number of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * 411xxxxxxxxxxx0001
   */
  docNo?: string;
  /**
   * @remarks
   * The document type, which is uniquely identified by an 8-digit number. For more information, see the document type list.
   * 
   * Currently, only the second-generation resident identity card of the Chinese mainland is supported. Set this parameter to 00000001.
   * 
   * This parameter is required.
   * 
   * @example
   * ​00000001
   */
  docType?: string;
  /**
   * @remarks
   * The custom unique business identifier, which is used for subsequent troubleshooting. The value can be up to 32 characters in length and can contain letters and digits. Make sure the value is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID or another identifier that can identify a specific user, such as a phone number or email address. We strongly recommend that you desensitize the value of this field in advance, for example, by hashing the value.
   * 
   * @example
   * 1234567890
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The product solution to use.
   * 
   * Set the value to eKYC_Date_MIN.
   * 
   * This parameter is required.
   * 
   * @example
   * eKYC_Date_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * The custom authentication scenario ID. You can use this scenario ID to query related records in the console. The value can be up to 10 characters in length and can contain letters, digits, and underscores.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * The expiration date of the ID card validity period, in the format YYYYMMDD. Example: 20301001.
   * 
   * This parameter is required.
   * 
   * @example
   * 20301001
   */
  validityEndDate?: string;
  /**
   * @remarks
   * The start date of the validity period, in the format YYYYMMDD. Example: 20201001.
   * 
   * This parameter is required.
   * 
   * @example
   * 20201001
   */
  validityStartDate?: string;
  static names(): { [key: string]: string } {
    return {
      docName: 'DocName',
      docNo: 'DocNo',
      docType: 'DocType',
      merchantBizId: 'MerchantBizId',
      merchantUserId: 'MerchantUserId',
      productCode: 'ProductCode',
      sceneCode: 'SceneCode',
      validityEndDate: 'ValidityEndDate',
      validityStartDate: 'ValidityStartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      docName: 'string',
      docNo: 'string',
      docType: 'string',
      merchantBizId: 'string',
      merchantUserId: 'string',
      productCode: 'string',
      sceneCode: 'string',
      validityEndDate: 'string',
      validityStartDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

