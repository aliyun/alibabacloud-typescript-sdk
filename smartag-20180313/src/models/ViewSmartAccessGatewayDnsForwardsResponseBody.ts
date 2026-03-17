// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ViewSmartAccessGatewayDnsForwardsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The domain name.
   * 
   * @example
   * www.baidu.com
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
   * 172.16.58.20
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

export class ViewSmartAccessGatewayDnsForwardsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1914
   */
  count?: number;
  /**
   * @remarks
   * A DNS forwarding list.
   */
  data?: ViewSmartAccessGatewayDnsForwardsResponseBodyData[];
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
   * E223E535-AE11-4158-B00F-DC107887A909
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
      count: 'Count',
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
      count: 'number',
      data: { 'type': 'array', 'itemType': ViewSmartAccessGatewayDnsForwardsResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

