// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySendDetailsByPhoneNumRequest extends $dara.Model {
  bizType?: number;
  errorCode?: string;
  ownerId?: number;
  pageNo?: number;
  pageSize?: number;
  phoneNum?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  sendDate?: string;
  sendStatus?: number;
  signName?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      errorCode: 'ErrorCode',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      phoneNum: 'PhoneNum',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendDate: 'SendDate',
      sendStatus: 'SendStatus',
      signName: 'SignName',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      errorCode: 'string',
      ownerId: 'number',
      pageNo: 'number',
      pageSize: 'number',
      phoneNum: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendDate: 'string',
      sendStatus: 'number',
      signName: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

