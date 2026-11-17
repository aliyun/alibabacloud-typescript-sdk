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
   * Zhang San
   */
  docName?: string;
  /**
   * @remarks
   * The identity document number of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * 411xxxxxxxxxxx0001
   */
  docNo?: string;
  /**
   * @remarks
   * The type of the identity document. The document type is uniquely identified by an 8-digit number. For more information, see the list of identity document types. Currently, only the second-generation resident identity card of the Chinese mainland is supported. Set this parameter to the fixed value: 00000001.
   * 
   * This parameter is required.
   * 
   * @example
   * ​00000001
   */
  docType?: string;
  /**
   * @remarks
   * The custom unique business identifier. You can use this identifier to locate and troubleshoot issues. The identifier can be up to 32 characters in length and can contain letters and digits. Make sure that the identifier is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * The custom user ID or another identifier that can identify a specific user, such as a mobile phone number or an email address. Desensitize the value of this field in advance, for example, by hashing the value.
   * 
   * @example
   * 1234567890
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The product solution to be integrated. Valid value: eKYC_Date_MIN.
   * 
   * This parameter is required.
   * 
   * @example
   * eKYC_Date_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * The custom authentication scenario ID. You can use this ID to query related records in the console. The ID can be up to 10 characters in length and can contain letters, digits, and underscores.
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * The expiration date of the ID card validity period. Format: YYYYMMDD. Example: 20301001.
   * 
   * This parameter is required.
   * 
   * @example
   * 20301001
   */
  validityEndDate?: string;
  /**
   * @remarks
   * The start date of the validity period. Format: YYYYMMDD. Example: 20201001.
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

