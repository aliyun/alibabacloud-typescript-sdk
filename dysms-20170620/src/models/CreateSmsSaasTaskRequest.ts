// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSmsSaasTaskRequest extends $dara.Model {
  bizType?: string;
  clientIp?: string;
  dataType?: string;
  orderTime?: string;
  ossFileName?: string;
  ownerId?: number;
  phoneList?: string;
  prodCode?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  scheduleType?: string;
  signName?: string;
  smsContent?: string;
  smsTemplateCode?: string;
  taskName?: string;
  validCount?: string;
  static names(): { [key: string]: string } {
    return {
      bizType: 'BizType',
      clientIp: 'ClientIp',
      dataType: 'DataType',
      orderTime: 'OrderTime',
      ossFileName: 'OssFileName',
      ownerId: 'OwnerId',
      phoneList: 'PhoneList',
      prodCode: 'ProdCode',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      scheduleType: 'ScheduleType',
      signName: 'SignName',
      smsContent: 'SmsContent',
      smsTemplateCode: 'SmsTemplateCode',
      taskName: 'TaskName',
      validCount: 'ValidCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizType: 'string',
      clientIp: 'string',
      dataType: 'string',
      orderTime: 'string',
      ossFileName: 'string',
      ownerId: 'number',
      phoneList: 'string',
      prodCode: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      scheduleType: 'string',
      signName: 'string',
      smsContent: 'string',
      smsTemplateCode: 'string',
      taskName: 'string',
      validCount: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

