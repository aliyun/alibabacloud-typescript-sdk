// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IdpAttrMapConfig } from "./IdpAttrMapConfig";
import { IdpConnectConfig } from "./IdpConnectConfig";
import { IdpDingtalkSubConfig } from "./IdpDingtalkSubConfig";
import { IdpFeishuSubConfig } from "./IdpFeishuSubConfig";
import { IdpIdaas2SubConfig } from "./IdpIdaas2subConfig";
import { IdpLdapSubConfig } from "./IdpLdapSubConfig";
import { IdpLoginConfig } from "./IdpLoginConfig";
import { IdpSyncConfig } from "./IdpSyncConfig";
import { IdpWeixin2SubConfig } from "./IdpWeixin2subConfig";
import { OpenStructIdpWuyingSubConfig } from "./OpenStructIdpWuyingSubConfig";


export class IdpConfig extends $dara.Model {
  attrMapConfig?: IdpAttrMapConfig;
  connectConfig?: IdpConnectConfig;
  description?: string;
  dingtalkConfig?: IdpDingtalkSubConfig;
  enabled?: boolean;
  feishuConfig?: IdpFeishuSubConfig;
  idaasConfig?: IdpIdaas2SubConfig;
  idpConfigId?: string;
  lastSyncTimeUnix?: number;
  ldapConfig?: IdpLdapSubConfig;
  loginConfig?: IdpLoginConfig;
  name?: string;
  syncConfig?: IdpSyncConfig;
  syncStatus?: string;
  type?: string;
  weixinConfig?: IdpWeixin2SubConfig;
  wuyingConfig?: OpenStructIdpWuyingSubConfig;
  static names(): { [key: string]: string } {
    return {
      attrMapConfig: 'AttrMapConfig',
      connectConfig: 'ConnectConfig',
      description: 'Description',
      dingtalkConfig: 'DingtalkConfig',
      enabled: 'Enabled',
      feishuConfig: 'FeishuConfig',
      idaasConfig: 'IdaasConfig',
      idpConfigId: 'IdpConfigId',
      lastSyncTimeUnix: 'LastSyncTimeUnix',
      ldapConfig: 'LdapConfig',
      loginConfig: 'LoginConfig',
      name: 'Name',
      syncConfig: 'SyncConfig',
      syncStatus: 'SyncStatus',
      type: 'Type',
      weixinConfig: 'WeixinConfig',
      wuyingConfig: 'WuyingConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attrMapConfig: IdpAttrMapConfig,
      connectConfig: IdpConnectConfig,
      description: 'string',
      dingtalkConfig: IdpDingtalkSubConfig,
      enabled: 'boolean',
      feishuConfig: IdpFeishuSubConfig,
      idaasConfig: IdpIdaas2SubConfig,
      idpConfigId: 'string',
      lastSyncTimeUnix: 'number',
      ldapConfig: IdpLdapSubConfig,
      loginConfig: IdpLoginConfig,
      name: 'string',
      syncConfig: IdpSyncConfig,
      syncStatus: 'string',
      type: 'string',
      weixinConfig: IdpWeixin2SubConfig,
      wuyingConfig: OpenStructIdpWuyingSubConfig,
    };
  }

  validate() {
    if(this.attrMapConfig && typeof (this.attrMapConfig as any).validate === 'function') {
      (this.attrMapConfig as any).validate();
    }
    if(this.connectConfig && typeof (this.connectConfig as any).validate === 'function') {
      (this.connectConfig as any).validate();
    }
    if(this.dingtalkConfig && typeof (this.dingtalkConfig as any).validate === 'function') {
      (this.dingtalkConfig as any).validate();
    }
    if(this.feishuConfig && typeof (this.feishuConfig as any).validate === 'function') {
      (this.feishuConfig as any).validate();
    }
    if(this.idaasConfig && typeof (this.idaasConfig as any).validate === 'function') {
      (this.idaasConfig as any).validate();
    }
    if(this.ldapConfig && typeof (this.ldapConfig as any).validate === 'function') {
      (this.ldapConfig as any).validate();
    }
    if(this.loginConfig && typeof (this.loginConfig as any).validate === 'function') {
      (this.loginConfig as any).validate();
    }
    if(this.syncConfig && typeof (this.syncConfig as any).validate === 'function') {
      (this.syncConfig as any).validate();
    }
    if(this.weixinConfig && typeof (this.weixinConfig as any).validate === 'function') {
      (this.weixinConfig as any).validate();
    }
    if(this.wuyingConfig && typeof (this.wuyingConfig as any).validate === 'function') {
      (this.wuyingConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

