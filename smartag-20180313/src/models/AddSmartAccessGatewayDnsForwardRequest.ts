// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSmartAccessGatewayDnsForwardRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * > 
   * >- Wildcard domain names and full match are supported. You can enter an asterisk (*) for the domain name to match all. Examples:
   * *.baidu.com. The allowed input format is baidu.com.
   * 
   * This parameter is required.
   * 
   * @example
   * www.aliyun.com
   */
  domain?: string;
  /**
   * @remarks
   * The primary DNS server.
   * 
   * This parameter is required.
   * 
   * @example
   * 114.114.114.114
   */
  masterIp?: string;
  /**
   * @remarks
   * The forwarding mode.
   * 
   * >- This field is invalid. You can ignore it.
   * 
   * @example
   * first
   */
  mode?: string;
  /**
   * @remarks
   * The outbound port index.
   * >- This parameter is optional when OutboundPortType is set to PhysicalPort, and is not required when OutboundPortType is set to Tunnel.
   * >- OutboundPortIndex and OutboundPortName have a one-to-one mapping: 0 - eth0; 2 - lte.
   * 
   * @example
   * 0
   */
  outboundPortIndex?: string;
  /**
   * @remarks
   * The outbound port.
   * >- This parameter is optional when OutboundPortType is set to PhysicalPort, and is not required when OutboundPortType is set to Tunnel.
   * >- OutboundPortIndex and OutboundPortName have a one-to-one mapping: 0 - eth0; 2 - lte.
   * 
   * @example
   * eth0
   */
  outboundPortName?: string;
  /**
   * @remarks
   * The outbound port type.
   * >- A value of Tunnel indicates a tunnel port, and a value of PhysicalPort indicates a physical port.
   * 
   * @example
   * Tunnel
   */
  outboundPortType?: string;
  /**
   * @remarks
   * The region ID of the Smart Access Gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the Smart Access Gateway instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-v9un1ccz22owd76lf8
   */
  sagInsId?: string;
  /**
   * @remarks
   * The serial number of the device.
   * 
   * This parameter is required.
   * 
   * @example
   * sagf4dkqh78
   */
  sagSn?: string;
  /**
   * @remarks
   * The secondary DNS server.
   * 
   * @example
   * 172.16.0.14
   */
  slaveIp?: string;
  static names(): { [key: string]: string } {
    return {
      domain: 'Domain',
      masterIp: 'MasterIp',
      mode: 'Mode',
      outboundPortIndex: 'OutboundPortIndex',
      outboundPortName: 'OutboundPortName',
      outboundPortType: 'OutboundPortType',
      regionId: 'RegionId',
      sagInsId: 'SagInsId',
      sagSn: 'SagSn',
      slaveIp: 'SlaveIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domain: 'string',
      masterIp: 'string',
      mode: 'string',
      outboundPortIndex: 'string',
      outboundPortName: 'string',
      outboundPortType: 'string',
      regionId: 'string',
      sagInsId: 'string',
      sagSn: 'string',
      slaveIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

