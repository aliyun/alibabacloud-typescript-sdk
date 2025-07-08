// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyExportSmsSendRecordNewRequest extends $dara.Model {
  bizType?: number;
  endDate?: string;
  errorCode?: string;
  ownerId?: number;
  phoneNum?: string;
  prodCode?: string;
  realTimeDataFlag?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  sendDate?: string;
  sendStatus?: number;
  signName?: string;
  startDate?: string;
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      endDate: 'EndDate',
      errorCode: 'ErrorCode',
      ownerId: 'OwnerId',
      phoneNum: 'PhoneNum',
      prodCode: 'ProdCode',
      realTimeDataFlag: 'RealTimeDataFlag',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      sendDate: 'SendDate',
      sendStatus: 'SendStatus',
      signName: 'SignName',
      startDate: 'StartDate',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'number',
      endDate: 'string',
      errorCode: 'string',
      ownerId: 'number',
      phoneNum: 'string',
      prodCode: 'string',
      realTimeDataFlag: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      sendDate: 'string',
      sendStatus: 'number',
      signName: 'string',
      startDate: 'string',
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

