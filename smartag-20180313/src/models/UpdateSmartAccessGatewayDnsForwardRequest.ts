// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSmartAccessGatewayDnsForwardRequest extends $dara.Model {
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
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * sagv3dnsforward-nc7qabskj17werc7su
   */
  instanceId?: string;
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
   * 
   * **if can be null:**
   * true
   */
  outboundPortIndex?: number;
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
   * PhysicalPort
   * 
   * **if can be null:**
   * true
   */
  outboundPortType?: string;
  /**
   * @remarks
   * The ID of the region in which the SAG instance resides.
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
      instanceId: 'InstanceId',
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
      instanceId: 'string',
      masterIp: 'string',
      mode: 'string',
      outboundPortIndex: 'number',
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

