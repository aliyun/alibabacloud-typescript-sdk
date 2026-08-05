// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOfflineTaskLogResponseBodyResultNetworkPrivateEsWhiteIpGroup extends $dara.Model {
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * kevintest
   */
  groupName?: string;
  /**
   * @remarks
   * The list of IP addresses in the whitelist group.
   */
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

export class GetOfflineTaskLogResponseBodyResultNetworkPrivateEs extends $dara.Model {
  /**
   * @remarks
   * The domain name of the private ES.
   * 
   * @example
   * test.private.cn-hangzhou.log.elasticsearch.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether private ES is enabled.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The IP whitelist groups.
   */
  whiteIpGroup?: GetOfflineTaskLogResponseBodyResultNetworkPrivateEsWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      enabled: 'enabled',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      whiteIpGroup: { 'type': 'array', 'itemType': GetOfflineTaskLogResponseBodyResultNetworkPrivateEsWhiteIpGroup },
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

export class GetOfflineTaskLogResponseBodyResultNetworkPublicEsWhiteIpGroup extends $dara.Model {
  /**
   * @remarks
   * The group name.
   * 
   * @example
   * kevintest
   */
  groupName?: string;
  /**
   * @remarks
   * The list of IP addresses in the whitelist group.
   */
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

export class GetOfflineTaskLogResponseBodyResultNetworkPublicEs extends $dara.Model {
  /**
   * @remarks
   * The public domain name of ES.
   * 
   * @example
   * test.public.cn-hangzhou.log.elasticsearch.aliyuncs.com
   */
  domain?: string;
  /**
   * @remarks
   * Indicates whether public ES is enabled.
   */
  enabled?: boolean;
  /**
   * @remarks
   * The IP whitelist groups.
   */
  whiteIpGroup?: GetOfflineTaskLogResponseBodyResultNetworkPublicEsWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      domain: 'domain',
      enabled: 'enabled',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      enabled: 'boolean',
      whiteIpGroup: { 'type': 'array', 'itemType': GetOfflineTaskLogResponseBodyResultNetworkPublicEsWhiteIpGroup },
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

export class GetOfflineTaskLogResponseBodyResultNetwork extends $dara.Model {
  /**
   * @remarks
   * The private ES information.
   */
  privateEs?: GetOfflineTaskLogResponseBodyResultNetworkPrivateEs;
  /**
   * @remarks
   * The public ES information.
   */
  publicEs?: GetOfflineTaskLogResponseBodyResultNetworkPublicEs;
  static names(): { [key: string]: string } {
    return {
      privateEs: 'privateEs',
      publicEs: 'publicEs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateEs: GetOfflineTaskLogResponseBodyResultNetworkPrivateEs,
      publicEs: GetOfflineTaskLogResponseBodyResultNetworkPublicEs,
    };
  }

  validate() {
    if(this.privateEs && typeof (this.privateEs as any).validate === 'function') {
      (this.privateEs as any).validate();
    }
    if(this.publicEs && typeof (this.publicEs as any).validate === 'function') {
      (this.publicEs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfflineTaskLogResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The network information.
   */
  network?: GetOfflineTaskLogResponseBodyResultNetwork;
  static names(): { [key: string]: string } {
    return {
      network: 'network',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: GetOfflineTaskLogResponseBodyResultNetwork,
    };
  }

  validate() {
    if(this.network && typeof (this.network as any).validate === 'function') {
      (this.network as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetOfflineTaskLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1-2-3-4
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   */
  result?: GetOfflineTaskLogResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetOfflineTaskLogResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

