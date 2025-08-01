// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie extends $dara.Model {
  name?: string;
  path?: string;
  /**
   * @example
   * 0s
   */
  TTL?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      path: 'Path',
      TTL: 'TTL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      path: 'string',
      TTL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficPolicyLoadBalancerSettingsConsistentHashLBConfig extends $dara.Model {
  consistentHashLBType?: string;
  httpCookie?: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie;
  parameterName?: string;
  static names(): { [key: string]: string } {
    return {
      consistentHashLBType: 'ConsistentHashLBType',
      httpCookie: 'HttpCookie',
      parameterName: 'ParameterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentHashLBType: 'string',
      httpCookie: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfigHttpCookie,
      parameterName: 'string',
    };
  }

  validate() {
    if(this.httpCookie && typeof (this.httpCookie as any).validate === 'function') {
      (this.httpCookie as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficPolicyLoadBalancerSettings extends $dara.Model {
  consistentHashLBConfig?: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfig;
  /**
   * @example
   * RANDOM
   */
  loadbalancerType?: string;
  warmupDuration?: number;
  static names(): { [key: string]: string } {
    return {
      consistentHashLBConfig: 'ConsistentHashLBConfig',
      loadbalancerType: 'LoadbalancerType',
      warmupDuration: 'WarmupDuration',
    };
  }

  static types(): { [key: string]: any } {
    return {
      consistentHashLBConfig: TrafficPolicyLoadBalancerSettingsConsistentHashLBConfig,
      loadbalancerType: 'string',
      warmupDuration: 'number',
    };
  }

  validate() {
    if(this.consistentHashLBConfig && typeof (this.consistentHashLBConfig as any).validate === 'function') {
      (this.consistentHashLBConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficPolicyTlsSetting extends $dara.Model {
  caCertContent?: string;
  certId?: string;
  sni?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * SIMPLE
   */
  tlsMode?: string;
  static names(): { [key: string]: string } {
    return {
      caCertContent: 'CaCertContent',
      certId: 'CertId',
      sni: 'Sni',
      tlsMode: 'TlsMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      caCertContent: 'string',
      certId: 'string',
      sni: 'string',
      tlsMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TrafficPolicy extends $dara.Model {
  loadBalancerSettings?: TrafficPolicyLoadBalancerSettings;
  tlsSetting?: TrafficPolicyTlsSetting;
  static names(): { [key: string]: string } {
    return {
      loadBalancerSettings: 'LoadBalancerSettings',
      tlsSetting: 'TlsSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadBalancerSettings: TrafficPolicyLoadBalancerSettings,
      tlsSetting: TrafficPolicyTlsSetting,
    };
  }

  validate() {
    if(this.loadBalancerSettings && typeof (this.loadBalancerSettings as any).validate === 'function') {
      (this.loadBalancerSettings as any).validate();
    }
    if(this.tlsSetting && typeof (this.tlsSetting as any).validate === 'function') {
      (this.tlsSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

