// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ForwardInfoResponseConnectInfoInternet extends $dara.Model {
  /**
   * @example
   * 47.111.119.114
   */
  endpoint?: string;
  /**
   * @example
   * 22
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForwardInfoResponseConnectInfoIntranet extends $dara.Model {
  /**
   * @example
   * dsw-notebook-22-urz3u6cnu0uts7ej9r.dsw-5cc6083084818f60.dsw.pai.alibaba.com
   */
  endpoint?: string;
  /**
   * @example
   * 22
   */
  port?: string;
  static names(): { [key: string]: string } {
    return {
      endpoint: 'Endpoint',
      port: 'Port',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpoint: 'string',
      port: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForwardInfoResponseConnectInfo extends $dara.Model {
  internet?: ForwardInfoResponseConnectInfoInternet;
  intranet?: ForwardInfoResponseConnectInfoIntranet;
  /**
   * @example
   * DNAT and privateZone are both ready.
   */
  message?: string;
  /**
   * @example
   * Ready
   */
  phase?: string;
  static names(): { [key: string]: string } {
    return {
      internet: 'Internet',
      intranet: 'Intranet',
      message: 'Message',
      phase: 'Phase',
    };
  }

  static types(): { [key: string]: any } {
    return {
      internet: ForwardInfoResponseConnectInfoInternet,
      intranet: ForwardInfoResponseConnectInfoIntranet,
      message: 'string',
      phase: 'string',
    };
  }

  validate() {
    if(this.internet && typeof (this.internet as any).validate === 'function') {
      (this.internet as any).validate();
    }
    if(this.intranet && typeof (this.intranet as any).validate === 'function') {
      (this.intranet as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ForwardInfoResponse extends $dara.Model {
  accessType?: string[];
  connectInfo?: ForwardInfoResponseConnectInfo;
  /**
   * @example
   * dsw-notebook
   */
  containerName?: string;
  /**
   * @example
   * eip-25877c70gddh****
   */
  eipAllocationId?: string;
  /**
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @example
   * 1024
   */
  externalPort?: string;
  /**
   * @example
   * 22
   */
  forwardPort?: string;
  /**
   * @example
   * ssh
   */
  name?: string;
  /**
   * @example
   * ngw-bp1uewa15k4iy5770****
   */
  natGatewayId?: string;
  SSHPublicKey?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      connectInfo: 'ConnectInfo',
      containerName: 'ContainerName',
      eipAllocationId: 'EipAllocationId',
      enable: 'Enable',
      externalPort: 'ExternalPort',
      forwardPort: 'ForwardPort',
      name: 'Name',
      natGatewayId: 'NatGatewayId',
      SSHPublicKey: 'SSHPublicKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: { 'type': 'array', 'itemType': 'string' },
      connectInfo: ForwardInfoResponseConnectInfo,
      containerName: 'string',
      eipAllocationId: 'string',
      enable: 'boolean',
      externalPort: 'string',
      forwardPort: 'string',
      name: 'string',
      natGatewayId: 'string',
      SSHPublicKey: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.accessType)) {
      $dara.Model.validateArray(this.accessType);
    }
    if(this.connectInfo && typeof (this.connectInfo as any).validate === 'function') {
      (this.connectInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

