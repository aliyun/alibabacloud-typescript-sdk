// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsTrademarkRequest extends $dara.Model {
  ownerId?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the applicant. The value can be up to 50 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里巴巴（中国）有限公司
   */
  trademarkApplicantName?: string;
  /**
   * @remarks
   * The effective and expiration dates of the exclusive right.
   * 
   * This parameter is required.
   * 
   * @example
   * 2010-12-14~2030-12-13
   */
  trademarkEffExpDate?: string;
  /**
   * @remarks
   * The trademark name. The value can be up to 15 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 阿里云
   */
  trademarkName?: string;
  /**
   * @remarks
   * The fileKey of the trademark details screenshot.
   * 
   * 1. How to query a trademark:
   * - Log on to the China Trademark Network, click **Trademark Online Query**, and take a screenshot of the trademark details.
   * - Accept the terms of use and enter the **Application/Registration Number** to query.
   * - Click the **Application/Registration Number** to view the details.
   * 
   * 2. Information about the trademark file uploaded to OSS. File upload requirements:
   * - The name of the file to be uploaded cannot contain Chinese characters or special characters.
   * - Only images in JPG, PNG, GIF, and JPEG formats are supported, and the image size cannot exceed 5 MB.
   * - The screenshot must contain the complete URL.
   * - The trademark image must be clear and identical to the **signature name**.
   * - The **applicant name** must be identical to the name of the enterprise or institution associated with the signature.
   * - The trademark status must be registered trademark.
   * 
   * 3. To obtain the fileKey, see [Upload files to OSS](https://help.aliyun.com/document_detail/2833114.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/test1719383196031.jpg
   */
  trademarkPic?: string;
  /**
   * @remarks
   * The trademark registration number. The value can be up to 15 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * 766905
   */
  trademarkRegistrationNumber?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      trademarkApplicantName: 'TrademarkApplicantName',
      trademarkEffExpDate: 'TrademarkEffExpDate',
      trademarkName: 'TrademarkName',
      trademarkPic: 'TrademarkPic',
      trademarkRegistrationNumber: 'TrademarkRegistrationNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      trademarkApplicantName: 'string',
      trademarkEffExpDate: 'string',
      trademarkName: 'string',
      trademarkPic: 'string',
      trademarkRegistrationNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

