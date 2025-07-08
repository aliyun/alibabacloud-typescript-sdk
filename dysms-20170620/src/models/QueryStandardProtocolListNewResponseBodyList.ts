// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryStandardProtocolListNewResponseBodyList extends $dara.Model {
  auditOrderId?: string;
  corpCode?: string;
  effIpWhiteList?: string;
  featureCode?: number;
  ip?: string;
  ipAuditStatus?: number;
  ipWhiteList?: string;
  partnerId?: number;
  port?: string;
  profileId?: number;
  protocolType?: number;
  protocolTypeStr?: string;
  realNameInsId?: number;
  resCode?: string;
  smsSign?: string;
  smsType?: string;
  spCode?: string;
  status?: string;
  templateCode?: string;
  userLimit?: number;
  userMaxChannel?: number;
  userName?: string;
  userPwd?: string;
  static names(): { [key: string]: string } {
    return {
      auditOrderId: 'AuditOrderId',
      corpCode: 'CorpCode',
      effIpWhiteList: 'EffIpWhiteList',
      featureCode: 'FeatureCode',
      ip: 'Ip',
      ipAuditStatus: 'IpAuditStatus',
      ipWhiteList: 'IpWhiteList',
      partnerId: 'PartnerId',
      port: 'Port',
      profileId: 'ProfileId',
      protocolType: 'ProtocolType',
      protocolTypeStr: 'ProtocolTypeStr',
      realNameInsId: 'RealNameInsId',
      resCode: 'ResCode',
      smsSign: 'SmsSign',
      smsType: 'SmsType',
      spCode: 'SpCode',
      status: 'Status',
      templateCode: 'TemplateCode',
      userLimit: 'UserLimit',
      userMaxChannel: 'UserMaxChannel',
      userName: 'UserName',
      userPwd: 'UserPwd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditOrderId: 'string',
      corpCode: 'string',
      effIpWhiteList: 'string',
      featureCode: 'number',
      ip: 'string',
      ipAuditStatus: 'number',
      ipWhiteList: 'string',
      partnerId: 'number',
      port: 'string',
      profileId: 'number',
      protocolType: 'number',
      protocolTypeStr: 'string',
      realNameInsId: 'number',
      resCode: 'string',
      smsSign: 'string',
      smsType: 'string',
      spCode: 'string',
      status: 'string',
      templateCode: 'string',
      userLimit: 'number',
      userMaxChannel: 'number',
      userName: 'string',
      userPwd: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

