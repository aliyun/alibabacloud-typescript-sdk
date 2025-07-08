// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySendDetailsByPhoneNumNewRequest extends $dara.Model {
  bizId?: string;
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
  statisticsStatus?: number;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
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
      statisticsStatus: 'StatisticsStatus',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
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
      statisticsStatus: 'number',
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

