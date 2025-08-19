// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAppRequestAuthenticationBasicAuth extends $dara.Model {
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

export class UpdateAppRequestAuthentication extends $dara.Model {
  basicAuth?: UpdateAppRequestAuthenticationBasicAuth[];
  static names(): { [key: string]: string } {
    return {
      basicAuth: 'basicAuth',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicAuth: { 'type': 'array', 'itemType': UpdateAppRequestAuthenticationBasicAuth },
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

export class UpdateAppRequestLimiterInfoLimiters extends $dara.Model {
  maxValue?: number;
  minValue?: number;
  type?: string;
  values?: string[];
  static names(): { [key: string]: string } {
    return {
      maxValue: 'maxValue',
      minValue: 'minValue',
      type: 'type',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxValue: 'number',
      minValue: 'number',
      type: 'string',
      values: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.values)) {
      $dara.Model.validateArray(this.values);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestLimiterInfo extends $dara.Model {
  limiters?: UpdateAppRequestLimiterInfoLimiters[];
  static names(): { [key: string]: string } {
    return {
      limiters: 'limiters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      limiters: { 'type': 'array', 'itemType': UpdateAppRequestLimiterInfoLimiters },
    };
  }

  validate() {
    if(Array.isArray(this.limiters)) {
      $dara.Model.validateArray(this.limiters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateAppRequestNetworkWhiteIpGroup extends $dara.Model {
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

export class UpdateAppRequestNetwork extends $dara.Model {
  domain?: string;
  enabled?: boolean;
  port?: number;
  type?: string;
  whiteIpGroup?: UpdateAppRequestNetworkWhiteIpGroup[];
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
      whiteIpGroup: { 'type': 'array', 'itemType': UpdateAppRequestNetworkWhiteIpGroup },
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

export class UpdateAppRequestPrivateNetworkWhiteIpGroup extends $dara.Model {
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

export class UpdateAppRequestPrivateNetwork extends $dara.Model {
  enabled?: boolean;
  pvlEndpointId?: string;
  type?: string;
  vpcId?: string;
  whiteIpGroup?: UpdateAppRequestPrivateNetworkWhiteIpGroup[];
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
      whiteIpGroup: { 'type': 'array', 'itemType': UpdateAppRequestPrivateNetworkWhiteIpGroup },
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

export class UpdateAppRequest extends $dara.Model {
  applyReason?: string;
  authentication?: UpdateAppRequestAuthentication;
  contactInfo?: string;
  /**
   * @remarks
   * 应用备注
   */
  description?: string;
  limiterInfo?: UpdateAppRequestLimiterInfo;
  network?: UpdateAppRequestNetwork[];
  privateNetwork?: UpdateAppRequestPrivateNetwork[];
  static names(): { [key: string]: string } {
    return {
      applyReason: 'applyReason',
      authentication: 'authentication',
      contactInfo: 'contactInfo',
      description: 'description',
      limiterInfo: 'limiterInfo',
      network: 'network',
      privateNetwork: 'privateNetwork',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyReason: 'string',
      authentication: UpdateAppRequestAuthentication,
      contactInfo: 'string',
      description: 'string',
      limiterInfo: UpdateAppRequestLimiterInfo,
      network: { 'type': 'array', 'itemType': UpdateAppRequestNetwork },
      privateNetwork: { 'type': 'array', 'itemType': UpdateAppRequestPrivateNetwork },
    };
  }

  validate() {
    if(this.authentication && typeof (this.authentication as any).validate === 'function') {
      (this.authentication as any).validate();
    }
    if(this.limiterInfo && typeof (this.limiterInfo as any).validate === 'function') {
      (this.limiterInfo as any).validate();
    }
    if(Array.isArray(this.network)) {
      $dara.Model.validateArray(this.network);
    }
    if(Array.isArray(this.privateNetwork)) {
      $dara.Model.validateArray(this.privateNetwork);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

