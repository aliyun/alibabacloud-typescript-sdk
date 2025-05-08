// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyForwardEntryRequest extends $dara.Model {
  /**
   * @remarks
   * The EIP in the DNAT entry. The public IP address is used to access the Internet.
   * 
   * @example
   * 121.XXX.XXX.28
   */
  externalIp?: string;
  /**
   * @remarks
   * The external port or port range that is used for port forwarding.
   * 
   * *   Valid values: 1 to 65535.
   * *   To specify a port range, separate the first port and the last port with a forward slash (/), such as 10/20. The first port and the last port are included.
   * *   If you set ExternalPort to a port range, you must also set InternalPort to a port range. The number of ports in the port ranges must be the same. For example, if you set ExternalPort to 10/20, you can set InternalPort to 80/90.
   * *   The maximum port range is 1000.
   * 
   * @example
   * 22
   */
  externalPort?: string;
  /**
   * @remarks
   * The ID of the DNAT entry.
   * 
   * This parameter is required.
   * 
   * @example
   * dnat-5tfjp3537mi6iokl59g5c****
   */
  forwardEntryId?: string;
  /**
   * @remarks
   * The name of the DNAT entry. The name must be 2 to 128 characters in length. It cannot start with `http://` or `https://`.
   * 
   * @example
   * test0
   */
  forwardEntryName?: string;
  /**
   * @remarks
   * The probe port. The port must be within the internal port range. By default, this parameter is left empty.
   * 
   * @example
   * 80
   */
  healthCheckPort?: number;
  /**
   * @remarks
   * The private IP address of the instance that uses the DNAT entry for Internet communication.
   * 
   * @example
   * 10.XXX.XXX.50
   */
  internalIp?: string;
  /**
   * @remarks
   * The private port or port range that is used in port forwarding.
   * 
   * *   Valid values: 1 to 65535.
   * *   To specify a port range, separate the first port and the last port with a forward slash (/), such as 10/20. The first port and the last port are included.
   * *   If you set InternalPort to a port range, you must also set ExternalPort to a port range. The number of ports in the port ranges must be the same. For example, if you set ExternalPort to 10/20, you can set InternalPort to 80/90.
   * *   The maximum port range is 1000.
   * 
   * @example
   * 22
   */
  internalPort?: string;
  /**
   * @remarks
   * The protocol. Valid values:
   * 
   * *   **TCP**: forwards TCP packets.
   * *   **UDP**: forwards UDP packets.
   * *   **Any** (default): forwards all packets.
   * 
   * @example
   * Any
   */
  ipProtocol?: string;
  static names(): { [key: string]: string } {
    return {
      externalIp: 'ExternalIp',
      externalPort: 'ExternalPort',
      forwardEntryId: 'ForwardEntryId',
      forwardEntryName: 'ForwardEntryName',
      healthCheckPort: 'HealthCheckPort',
      internalIp: 'InternalIp',
      internalPort: 'InternalPort',
      ipProtocol: 'IpProtocol',
    };
  }

  static types(): { [key: string]: any } {
    return {
      externalIp: 'string',
      externalPort: 'string',
      forwardEntryId: 'string',
      forwardEntryName: 'string',
      healthCheckPort: 'number',
      internalIp: 'string',
      internalPort: 'string',
      ipProtocol: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

