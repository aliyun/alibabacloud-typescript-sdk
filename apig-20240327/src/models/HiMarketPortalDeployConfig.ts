// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HiMarketPortalDeployConfigSaeConfig extends $dara.Model {
  appId?: string;
  namespaceId?: string;
  oidcRoleName?: string;
  regionId?: string;
  replicas?: string;
  securityGroupId?: string;
  vSwitchId?: string;
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'appId',
      namespaceId: 'namespaceId',
      oidcRoleName: 'oidcRoleName',
      regionId: 'regionId',
      replicas: 'replicas',
      securityGroupId: 'securityGroupId',
      vSwitchId: 'vSwitchId',
      vpcId: 'vpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      namespaceId: 'string',
      oidcRoleName: 'string',
      regionId: 'string',
      replicas: 'string',
      securityGroupId: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class HiMarketPortalDeployConfig extends $dara.Model {
  message?: string;
  platform?: string;
  saeConfig?: HiMarketPortalDeployConfigSaeConfig;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'message',
      platform: 'platform',
      saeConfig: 'saeConfig',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      platform: 'string',
      saeConfig: HiMarketPortalDeployConfigSaeConfig,
      status: 'string',
    };
  }

  validate() {
    if(this.saeConfig && typeof (this.saeConfig as any).validate === 'function') {
      (this.saeConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

