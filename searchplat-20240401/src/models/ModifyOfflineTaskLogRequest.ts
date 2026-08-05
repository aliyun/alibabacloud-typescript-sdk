// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyOfflineTaskLogRequestNetworkPrivateEsWhiteIpGroup extends $dara.Model {
  /**
   * @remarks
   * The name of the IP whitelist group.
   * 
   * @example
   * kevintest
   */
  groupName?: string;
  /**
   * @remarks
   * The IP whitelist.
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

export class ModifyOfflineTaskLogRequestNetworkPrivateEs extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to enable or disable private network access.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The IP whitelist groups.
   */
  whiteIpGroup?: ModifyOfflineTaskLogRequestNetworkPrivateEsWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      whiteIpGroup: { 'type': 'array', 'itemType': ModifyOfflineTaskLogRequestNetworkPrivateEsWhiteIpGroup },
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

export class ModifyOfflineTaskLogRequestNetworkPublicEsWhiteIpGroup extends $dara.Model {
  /**
   * @remarks
   * **The name of the IP whitelist group.**
   * 
   * @example
   * kevintest
   */
  groupName?: string;
  /**
   * @remarks
   * **The IP whitelist.**
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

export class ModifyOfflineTaskLogRequestNetworkPublicEs extends $dara.Model {
  /**
   * @remarks
   * **Specifies whether to enable or disable public network access.**
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * **The IP whitelist group information.**
   */
  whiteIpGroup?: ModifyOfflineTaskLogRequestNetworkPublicEsWhiteIpGroup[];
  static names(): { [key: string]: string } {
    return {
      enabled: 'enabled',
      whiteIpGroup: 'whiteIpGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      whiteIpGroup: { 'type': 'array', 'itemType': ModifyOfflineTaskLogRequestNetworkPublicEsWhiteIpGroup },
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

export class ModifyOfflineTaskLogRequestNetwork extends $dara.Model {
  /**
   * @remarks
   * The ES private network information.
   */
  privateEs?: ModifyOfflineTaskLogRequestNetworkPrivateEs;
  /**
   * @remarks
   * **The ES public network information.**
   */
  publicEs?: ModifyOfflineTaskLogRequestNetworkPublicEs;
  static names(): { [key: string]: string } {
    return {
      privateEs: 'privateEs',
      publicEs: 'publicEs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      privateEs: ModifyOfflineTaskLogRequestNetworkPrivateEs,
      publicEs: ModifyOfflineTaskLogRequestNetworkPublicEs,
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

export class ModifyOfflineTaskLogRequest extends $dara.Model {
  /**
   * @remarks
   * The network configuration for enabling or disabling network access.
   */
  network?: ModifyOfflineTaskLogRequestNetwork;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      network: 'network',
      regionId: 'regionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      network: ModifyOfflineTaskLogRequestNetwork,
      regionId: 'string',
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

