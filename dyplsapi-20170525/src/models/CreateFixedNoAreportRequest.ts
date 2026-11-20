// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFixedNoAReportRequest extends $dara.Model {
  /**
   * @remarks
   * ID of the group to which Number A belongs. On the [Qualification Management](https://dyplsnext.console.aliyun.com/qualification) Page, go to the A-number whitelist section of the relevant qualification and click View Details.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
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
   * Phone number of the legal representative or agent.  
   * >If this qualification includes a Mobile X number, this field is Required; otherwise, the Review will Fail.
   * 
   * @example
   * 130*****8888
   */
  custPhoneNo?: string;
  /**
   * @remarks
   * Fixed-line customer type. Valid values:
   * 
   * - 1: Legal representative.
   * 
   * - 2: Agent.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  custType?: number;
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
   * Certificate type. Enter 1 for ID card.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  documentType?: number;
  /**
   * @remarks
   * Ticket number from the offline service hall when applying for a fixed-line number.
   * 
   * @example
   * 45***12
   */
  fixedLineWorkId?: string;
  /**
   * @remarks
   * Number A (fixed-line number).
   * 
   * This parameter is required.
   * 
   * @example
   * 89*****1234
   */
  fixedNoA?: string;
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
   * OSS path of the photo of the back (portrait side) of the ID card.
   * 
   * @example
   * 123456/test1719383196032.jpg
   */
  idCardBackPhoto?: string;
  /**
   * @remarks
   * OSS path of the photo of the front (national emblem side) of the ID card.
   * 
   * @example
   * 123456/test1719383196031.jpg
   */
  idCardFrontPhoto?: string;
  ownerId?: number;
  /**
   * @remarks
   * Remarks (user-defined business notes).
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
      custPhoneNo: 'CustPhoneNo',
      custType: 'CustType',
      documentNumber: 'DocumentNumber',
      documentType: 'DocumentType',
      fixedLineWorkId: 'FixedLineWorkId',
      fixedNoA: 'FixedNoA',
      idCardAlivePhoto: 'IdCardAlivePhoto',
      idCardBackPhoto: 'IdCardBackPhoto',
      idCardFrontPhoto: 'IdCardFrontPhoto',
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ANoWhiteGroupId: 'number',
      custName: 'string',
      custPhoneNo: 'string',
      custType: 'number',
      documentNumber: 'string',
      documentType: 'number',
      fixedLineWorkId: 'string',
      fixedNoA: 'string',
      idCardAlivePhoto: 'string',
      idCardBackPhoto: 'string',
      idCardFrontPhoto: 'string',
      ownerId: 'number',
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

