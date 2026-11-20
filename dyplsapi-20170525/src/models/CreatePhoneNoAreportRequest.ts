// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePhoneNoAReportRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the A-number group. On the [Qualification Management](https://dyplsnext.console.aliyun.com/qualification) page, click View Details in the A-number whitelist section of the relevant qualification.
   * 
   * This parameter is required.
   * 
   * @example
   * 19
   */
  ANoWhiteGroupId?: number;
  /**
   * @remarks
   * Name.
   * 
   * This parameter is required.
   * 
   * @example
   * 赵**
   */
  custName?: string;
  /**
   * @remarks
   * Certificate number.
   * 
   * This parameter is required.
   * 
   * @example
   * 370*********
   */
  documentNumber?: string;
  /**
   * @remarks
   * Certificate type. Enter 1 for an ID card.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  documentType?: number;
  /**
   * @remarks
   * OSS path of the front-facing portrait photo.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456/test1719383196033.jpg
   */
  idCardAlivePhoto?: string;
  /**
   * @remarks
   * OSS path of the photo of the back side (portrait side) of the ID card.
   * 
   * @example
   * 123456/test1719383196032.jpg
   */
  idCardBackPhoto?: string;
  /**
   * @remarks
   * OSS path of the photo of the front side (national emblem side) of the ID card.
   * 
   * @example
   * 123456/test1719383196031.jpg
   */
  idCardFrontPhoto?: string;
  ownerId?: number;
  /**
   * @remarks
   * Phone number.
   * 
   * This parameter is required.
   * 
   * @example
   * 130*****1234
   */
  phoneNoA?: string;
  /**
   * @remarks
   * Remark (business remark added by the user).
   * 
   * @example
   * ***报备
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      ANoWhiteGroupId: 'ANoWhiteGroupId',
      custName: 'CustName',
      documentNumber: 'DocumentNumber',
      documentType: 'DocumentType',
      idCardAlivePhoto: 'IdCardAlivePhoto',
      idCardBackPhoto: 'IdCardBackPhoto',
      idCardFrontPhoto: 'IdCardFrontPhoto',
      ownerId: 'OwnerId',
      phoneNoA: 'PhoneNoA',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ANoWhiteGroupId: 'number',
      custName: 'string',
      documentNumber: 'string',
      documentType: 'number',
      idCardAlivePhoto: 'string',
      idCardBackPhoto: 'string',
      idCardFrontPhoto: 'string',
      ownerId: 'number',
      phoneNoA: 'string',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

