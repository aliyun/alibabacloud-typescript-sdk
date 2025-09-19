// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaPeriodVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * The user\\"s name.
   * 
   * This parameter is required.
   * 
   * @example
   * Zhang San
   */
  docName?: string;
  /**
   * @remarks
   * The user\\"s certificate number.
   * 
   * This parameter is required.
   * 
   * @example
   * 411xxxxxxxxxxx0001
   */
  docNo?: string;
  /**
   * @remarks
   * The certificate type, which is uniquely identified by an 8-digit number.
   * 
   * Currently, only second-generation resident ID cards from the Chinese mainland are supported. Set the value to the static field: **00000001**.
   * 
   * For more information, see [Certificate types](https://www.alibabacloud.com/help/en/ekyc/latest/im1u641gyesiqmbg?spm=a2c63.p38356.0.i13#Hu5TG).
   * 
   * This parameter is required.
   * 
   * @example
   * ​00000001
   */
  docType?: string;
  /**
   * @remarks
   * A unique business identifier that you can customize. Use this identifier to locate and troubleshoot issues. The identifier can be up to 32 characters in length and can contain letters and digits. Make sure that the identifier is unique.
   * 
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @remarks
   * A custom user ID or another identifier for a specific user, such as a mobile number or email address. Desensitize the value of this field in advance, for example, by hashing the value.
   * 
   * @example
   * 1234567890
   */
  merchantUserId?: string;
  /**
   * @remarks
   * The product solution to integrate. Set the value to **eKYC_Date_MIN**.
   * 
   * This parameter is required.
   * 
   * @example
   * eKYC_Date_MIN
   */
  productCode?: string;
  /**
   * @remarks
   * A custom authentication scenario ID. You can use this ID to query related records in the console. The ID can be up to 10 characters in length and can contain letters, digits, and underscores (_).
   * 
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * The expiration date of the ID card\\"s validity period. The format is YYYYMMDD.
   * 
   * > If the ID card is valid for a long term, enter **long-term** for this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 20301001
   */
  validityEndDate?: string;
  /**
   * @remarks
   * The start date of the validity period. The format is YYYYMMDD.
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

