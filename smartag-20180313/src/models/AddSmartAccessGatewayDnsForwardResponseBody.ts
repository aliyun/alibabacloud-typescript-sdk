// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSmartAccessGatewayDnsForwardResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * yfiy.cn
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * sagv3dnsforward-nc7qabskj17werc7su
   */
  instanceId?: string;
  /**
   * @remarks
   * The primary DNS server.
   * 
   * @example
   * 14.104.81.13
   */
  masterIp?: string;
  /**
   * @remarks
   * The forwarding mode.
   * 
   * @example
   * first
   */
  mode?: string;
  /**
   * @remarks
   * The number of the egress port.
   * 
   * @example
   * 0
   */
  outboundPortIndex?: number;
  /**
   * @remarks
   * The egress port.
   * 
   * @example
   * eth0
   */
  outboundPortName?: string;
  /**
   * @remarks
   * The type of the egress port.
   * 
   * @example
   * PhysicalPort
   */
  outboundPortType?: string;
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

export class AddSmartAccessGatewayDnsForwardResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of 200 indicates that the call is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The information returned for the request.
   */
  data?: AddSmartAccessGatewayDnsForwardResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E93884AC-6C21-4FEA-8E3A-7377D33B194F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddSmartAccessGatewayDnsForwardResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

