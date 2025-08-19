// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateAppRequestAuthenticationBasicAuth extends $dara.Model {
  password?: string;
  username?: string;
  static names(): { [key: string]: string } {
    return {
      password: 'password',
      username: 'username',
    };
  }

  static types(): { [key: string]: any } {
    return {
      password: 'string',
      username: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestAuthentication extends $dara.Model {
  basicAuth?: CreateAppRequestAuthenticationBasicAuth[];
  static names(): { [key: string]: string } {
    return {
      basicAuth: 'basicAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicAuth: { 'type': 'array', 'itemType': CreateAppRequestAuthenticationBasicAuth },
    };
  }

  validate() {
    if(Array.isArray(this.basicAuth)) {
      $dara.Model.validateArray(this.basicAuth);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestNetworkWhiteIpGroup extends $dara.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestNetwork extends $dara.Model {
  domain?: string;
  enabled?: boolean;
  port?: number;
  type?: string;
  whiteIpGroup?: CreateAppRequestNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      enabled: 'enabled',
      port: 'port',
      type: 'type',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      port: 'number',
      type: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': CreateAppRequestNetworkWhiteIpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroup)) {
      $dara.Model.validateArray(this.whiteIpGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestPrivateNetworkWhiteIpGroup extends $dara.Model {
  groupName?: string;
  ips?: string[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'groupName',
      ips: 'ips',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      ips: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.ips)) {
      $dara.Model.validateArray(this.ips);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestPrivateNetwork extends $dara.Model {
  enabled?: boolean;
  pvlEndpointId?: string;
  type?: string;
  vpcId?: string;
  whiteIpGroup?: CreateAppRequestPrivateNetworkWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      pvlEndpointId: 'pvlEndpointId',
      type: 'type',
      vpcId: 'vpcId',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      pvlEndpointId: 'string',
      type: 'string',
      vpcId: 'string',
      whiteIpGroup: { 'type': 'array', 'itemType': CreateAppRequestPrivateNetworkWhiteIpGroup },
    };
  }

  validate() {
    if(Array.isArray(this.whiteIpGroup)) {
      $dara.Model.validateArray(this.whiteIpGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestQuotaInfo extends $dara.Model {
  appType?: string;
  cu?: number;
  storage?: number;
  static names(): { [key: string]: string } {
    return {
      appType: 'appType',
      cu: 'cu',
      storage: 'storage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appType: 'string',
      cu: 'number',
      storage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequestTags extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAppRequest extends $dara.Model {
  /**
   * @remarks
   * 应用名
   * 
   * This parameter is required.
   */
  appName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  authentication?: CreateAppRequestAuthentication;
  /**
   * @remarks
   * This parameter is required.
   */
  chargeType?: string;
  /**
   * @remarks
   * 应用备注
   */
  description?: string;
  network?: CreateAppRequestNetwork[];
  privateNetwork?: CreateAppRequestPrivateNetwork[];
  quotaInfo?: CreateAppRequestQuotaInfo;
  regionId?: string;
  scenario?: string;
  tags?: CreateAppRequestTags[];
  version?: string;
  clientToken?: string;
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      authentication: 'authentication',
      chargeType: 'chargeType',
      description: 'description',
      network: 'network',
      privateNetwork: 'privateNetwork',
      quotaInfo: 'quotaInfo',
      regionId: 'regionId',
      scenario: 'scenario',
      tags: 'tags',
      version: 'version',
      clientToken: 'clientToken',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      authentication: CreateAppRequestAuthentication,
      chargeType: 'string',
      description: 'string',
      network: { 'type': 'array', 'itemType': CreateAppRequestNetwork },
      privateNetwork: { 'type': 'array', 'itemType': CreateAppRequestPrivateNetwork },
      quotaInfo: CreateAppRequestQuotaInfo,
      regionId: 'string',
      scenario: 'string',
      tags: { 'type': 'array', 'itemType': CreateAppRequestTags },
      version: 'string',
      clientToken: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.authentication && typeof (this.authentication as any).validate === 'function') {
      (this.authentication as any).validate();
    }
    if(Array.isArray(this.network)) {
      $dara.Model.validateArray(this.network);
    }
    if(Array.isArray(this.privateNetwork)) {
      $dara.Model.validateArray(this.privateNetwork);
    }
    if(this.quotaInfo && typeof (this.quotaInfo as any).validate === 'function') {
      (this.quotaInfo as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

