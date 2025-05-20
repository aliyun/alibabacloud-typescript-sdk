// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Id2MetaPeriodVerifyIntlRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  docName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 411xxxxxxxxxxx0001
   */
  docNo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ​00000001
   */
  docType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e0c34a77f5ac40a5aa5e6ed20c35****
   */
  merchantBizId?: string;
  /**
   * @example
   * 1234567890
   */
  merchantUserId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * eKYC_Date_MIN
   */
  productCode?: string;
  /**
   * @example
   * 1234567890
   */
  sceneCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 20301001
   */
  validityEndDate?: string;
  /**
   * @remarks
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

