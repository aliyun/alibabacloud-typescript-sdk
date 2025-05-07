// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchPunishRequestResponseBodyDataList extends $dara.Model {
  antiPunishRespTime?: string;
  antiPunishTime?: string;
  antiResult?: string;
  antiStatus?: string;
  bussinessCode?: string;
  caseCode?: string;
  caseExtendCode?: string;
  caseSubCode?: string;
  class?: string;
  creator?: string;
  deleted?: boolean;
  eventCode?: string;
  expectedRemoveTime?: string;
  extRequestId?: string;
  gmtCreated?: string;
  gmtModified?: string;
  id?: number;
  idType?: string;
  instanceId?: string;
  ipString?: string;
  modifier?: string;
  operator?: string;
  operatorNum?: string;
  punishDomain?: string;
  punishIp?: string;
  punishOfficer?: string;
  punishOfficerNum?: string;
  punishRequest?: string;
  punishRespTime?: string;
  punishResult?: string;
  punishStatus?: string;
  punishTime?: string;
  punishUrl?: string;
  reason?: string;
  sourceCode?: string;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      antiPunishRespTime: 'AntiPunishRespTime',
      antiPunishTime: 'AntiPunishTime',
      antiResult: 'AntiResult',
      antiStatus: 'AntiStatus',
      bussinessCode: 'BussinessCode',
      caseCode: 'CaseCode',
      caseExtendCode: 'CaseExtendCode',
      caseSubCode: 'CaseSubCode',
      class: 'Class',
      creator: 'Creator',
      deleted: 'Deleted',
      eventCode: 'EventCode',
      expectedRemoveTime: 'ExpectedRemoveTime',
      extRequestId: 'ExtRequestId',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      idType: 'IdType',
      instanceId: 'InstanceId',
      ipString: 'IpString',
      modifier: 'Modifier',
      operator: 'Operator',
      operatorNum: 'OperatorNum',
      punishDomain: 'PunishDomain',
      punishIp: 'PunishIp',
      punishOfficer: 'PunishOfficer',
      punishOfficerNum: 'PunishOfficerNum',
      punishRequest: 'PunishRequest',
      punishRespTime: 'PunishRespTime',
      punishResult: 'PunishResult',
      punishStatus: 'PunishStatus',
      punishTime: 'PunishTime',
      punishUrl: 'PunishUrl',
      reason: 'Reason',
      sourceCode: 'SourceCode',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      antiPunishRespTime: 'string',
      antiPunishTime: 'string',
      antiResult: 'string',
      antiStatus: 'string',
      bussinessCode: 'string',
      caseCode: 'string',
      caseExtendCode: 'string',
      caseSubCode: 'string',
      class: 'string',
      creator: 'string',
      deleted: 'boolean',
      eventCode: 'string',
      expectedRemoveTime: 'string',
      extRequestId: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      idType: 'string',
      instanceId: 'string',
      ipString: 'string',
      modifier: 'string',
      operator: 'string',
      operatorNum: 'string',
      punishDomain: 'string',
      punishIp: 'string',
      punishOfficer: 'string',
      punishOfficerNum: 'string',
      punishRequest: 'string',
      punishRespTime: 'string',
      punishResult: 'string',
      punishStatus: 'string',
      punishTime: 'string',
      punishUrl: 'string',
      reason: 'string',
      sourceCode: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

