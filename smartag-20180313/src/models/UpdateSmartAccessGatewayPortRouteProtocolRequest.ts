// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAccessGatewayPortRouteProtocolRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query only the SAG instances that belong to another Alibaba Cloud account. Valid values:
   * 
   * *   **false** (default)
   * *   **true**
   * 
   * @example
   * false
   */
  crossAccount?: boolean;
  /**
   * @remarks
   * The port name.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  portName?: string;
  /**
   * @remarks
   * The region ID of the SAG instance.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The autonomous system number (ASN) of the SAG device.
   * 
   * > When you enable BGP, you must set this parameter.
   * 
   * @example
   * 65535
   */
  remoteAs?: string;
  /**
   * @remarks
   * The IP address of the peer device.
   * 
   * > When you enable BGP, you must set this parameter.
   * 
   * @example
   * 192.XX.XX.1
   */
  remoteIp?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account to which the SAG instance belongs.
   * 
   * @example
   * 109790620697****
   */
  resourceUid?: string;
  /**
   * @remarks
   * The routing protocol. Valid values:
   * 
   * *   **STATIC**
   * *   **OSPF**
   * *   **BGP**
   * 
   * This parameter is required.
   * 
   * @example
   * STATIC
   */
  routeProtocol?: string;
  /**
   * @remarks
   * The ID of the Smart Access Gateway (SAG) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-3manef62evrfr6****
   */
  sagInsId?: string;
  /**
   * @remarks
   * The serial number of the SAG device.
   * 
   * This parameter is required.
   * 
   * @example
   * sagf4dk****
   */
  sagSn?: string;
  /**
   * @remarks
   * The VLAN ID.
   * 
   * @example
   * 10
   */
  vlan?: string;
  static names(): { [key: string]: string } {
    return {
      crossAccount: 'CrossAccount',
      portName: 'PortName',
      regionId: 'RegionId',
      remoteAs: 'RemoteAs',
      remoteIp: 'RemoteIp',
      resourceUid: 'ResourceUid',
      routeProtocol: 'RouteProtocol',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
      vlan: 'Vlan',
    };
  }

  static types(): { [key: string]: any } {
    return {
      crossAccount: 'boolean',
      portName: 'string',
      regionId: 'string',
      remoteAs: 'string',
      remoteIp: 'string',
      resourceUid: 'string',
      routeProtocol: 'string',
      sagInsId: 'string',
      sagSn: 'string',
      vlan: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

