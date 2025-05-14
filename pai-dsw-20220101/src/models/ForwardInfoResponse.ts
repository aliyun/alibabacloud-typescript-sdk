// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ForwardInfoResponseConnectInfo } from "./ForwardInfoResponseConnectInfo";


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

