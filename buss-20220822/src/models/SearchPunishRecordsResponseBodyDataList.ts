// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPunishRecordsResponseBodyDataList extends $dara.Model {
  actionCode?: string;
  antiStatus?: string;
  bussinessCode?: string;
  caseCode?: string;
  createTime?: string;
  domain?: string;
  eventCode?: string;
  ip?: string;
  punishStatus?: string;
  reason?: string;
  resourceId?: string;
  tipsCode?: string;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      actionCode: 'ActionCode',
      antiStatus: 'AntiStatus',
      bussinessCode: 'BussinessCode',
      caseCode: 'CaseCode',
      createTime: 'CreateTime',
      domain: 'Domain',
      eventCode: 'EventCode',
      ip: 'Ip',
      punishStatus: 'PunishStatus',
      reason: 'Reason',
      resourceId: 'ResourceId',
      tipsCode: 'TipsCode',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionCode: 'string',
      antiStatus: 'string',
      bussinessCode: 'string',
      caseCode: 'string',
      createTime: 'string',
      domain: 'string',
      eventCode: 'string',
      ip: 'string',
      punishStatus: 'string',
      reason: 'string',
      resourceId: 'string',
      tipsCode: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

