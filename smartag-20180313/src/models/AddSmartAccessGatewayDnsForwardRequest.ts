// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSmartAccessGatewayDnsForwardRequest extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * > 
   * *   Wildcard domain names are supported. You can use the wildcard character asterisk (\\*) to specify a wildcard domain name.
   * 
   * For example, you can enter \\*.baidu.com to specify the domain name baidu.com.
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
   * > 
   * *   This parameter is not in use. Ignore this parameter.
   * 
   * @example
   * first
   */
  mode?: string;
  /**
   * @remarks
   * The number of the egress port.
   * 
   * > 
   * *   This parameter is optional if OutboundPortType is set to PhysicalPort. Ignore this parameter if OutboundPortType is set to Tunnel.
   * *   The value of OutboundPortIndex is the unique index of the port name specified by poOutboundPortName. For example, 0 is the index for the port named eth0, and 2 is the index for the port named lte.
   * 
   * @example
   * 0
   */
  outboundPortIndex?: string;
  /**
   * @remarks
   * The egress port.
   * 
   * > 
   * *   This parameter is optional if OutboundPortType is set to PhysicalPort. Ignore this parameter if OutboundPortType is set to Tunnel.
   * *   The value of OutboundPortIndex is the unique index of the port name specified by poOutboundPortName. For example, 0 is the index for the port named eth0, and 2 is the index for the port named lte.
   * 
   * @example
   * eth0
   */
  outboundPortName?: string;
  /**
   * @remarks
   * The type of the egress port.
   * 
   * > 
   * *   A value of Tunnel specifies a tunnel, and a value of PhysicalPort specifies a physical port.
   * 
   * @example
   * Tunnel
   */
  outboundPortType?: string;
  /**
   * @remarks
   * The ID of the region where the instance is deployed.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sag-v9un1ccz22owd76lf8
   */
  sagInsId?: string;
  /**
   * @remarks
   * The serial number (SN) of the device.
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

