// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGatewaySlbResponseBodyDataVServiceList extends $dara.Model {
  /**
   * @remarks
   * The port.
   * 
   * @example
   * 443
   */
  port?: string;
  /**
   * @remarks
   * The protocol type. Valid values:
   * - HTTPS
   * - HTTP
   * 
   * @example
   * HTTPS
   */
  protocol?: string;
  /**
   * @remarks
   * The ID of the virtual server group.
   * 
   * @example
   * rsp-bp183l2x70***
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The name of the virtual server group.
   */
  VServerGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      port: 'Port',
      protocol: 'Protocol',
      VServerGroupId: 'VServerGroupId',
      VServerGroupName: 'VServerGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      port: 'string',
      protocol: 'string',
      VServerGroupId: 'string',
      VServerGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaySlbResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the resource is editable.
   * 
   * @example
   * false
   */
  editEnable?: boolean;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * 1
   */
  gatewayId?: string;
  /**
   * @remarks
   * The source.
   * 
   * @example
   * UserSelect
   */
  gatewaySlbMode?: string;
  /**
   * @remarks
   * The association status.
   * 
   * @example
   * Ready
   */
  gatewaySlbStatus?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2022-01-14 14:39:16
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The HTTP port (virtual server group).
   * 
   * @example
   * 80
   */
  httpPort?: number;
  /**
   * @remarks
   * The HTTPS port (virtual server group).
   * 
   * @example
   * 443
   */
  httpsPort?: number;
  /**
   * @remarks
   * The ID of the HTTPS virtual server group.
   * 
   * @example
   * 353
   */
  httpsVServerGroupId?: string;
  /**
   * @remarks
   * ID
   * 
   * @example
   * ID
   */
  id?: string;
  /**
   * @remarks
   * The service weight.
   * 
   * @example
   * 80
   */
  serviceWeight?: number;
  /**
   * @remarks
   * SLB ID
   * 
   * @example
   * lb-bp1kmnli3hdpreptw2ah3
   */
  slbId?: string;
  /**
   * @remarks
   * SLB IP
   * 
   * @example
   * 121.199.XX.XX
   */
  slbIp?: string;
  /**
   * @remarks
   * The SLB port.
   * 
   * @example
   * 80,443
   */
  slbPort?: string;
  /**
   * @remarks
   * The SLB type.
   * 
   * @example
   * CLB
   */
  slbType?: string;
  /**
   * @remarks
   * The status description.
   * 
   * @example
   * Associating
   */
  statusDesc?: string;
  /**
   * @remarks
   * The network type. Valid values:
   * - PUB_NET: Internet.
   * - PRIVATE_NET: Private network.
   * 
   * @example
   * PUB_NET
   */
  type?: string;
  /**
   * @remarks
   * The ID of the HTTP virtual server group.
   * 
   * @example
   * 353
   */
  VServerGroupId?: string;
  /**
   * @remarks
   * The SLB listener information.
   */
  VServiceList?: ListGatewaySlbResponseBodyDataVServiceList[];
  /**
   * @remarks
   * The metadata of the virtual server group.
   * 
   * @example
   * [{"protocol":"HTTP","vServerGroupName":"k8s/80/****","port":80,"vServerGroupId":"rsp-bp***"},{"protocol":"HTTPS","vServerGroupName":"k8s/443/***","port":443,"vServerGroupId":"rsp-bp*****"}]
   */
  vsMetaInfo?: string;
  static names(): { [key: string]: string } {
    return {
      editEnable: 'EditEnable',
      gatewayId: 'GatewayId',
      gatewaySlbMode: 'GatewaySlbMode',
      gatewaySlbStatus: 'GatewaySlbStatus',
      gmtCreate: 'GmtCreate',
      httpPort: 'HttpPort',
      httpsPort: 'HttpsPort',
      httpsVServerGroupId: 'HttpsVServerGroupId',
      id: 'Id',
      serviceWeight: 'ServiceWeight',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      slbPort: 'SlbPort',
      slbType: 'SlbType',
      statusDesc: 'StatusDesc',
      type: 'Type',
      VServerGroupId: 'VServerGroupId',
      VServiceList: 'VServiceList',
      vsMetaInfo: 'VsMetaInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      editEnable: 'boolean',
      gatewayId: 'string',
      gatewaySlbMode: 'string',
      gatewaySlbStatus: 'string',
      gmtCreate: 'string',
      httpPort: 'number',
      httpsPort: 'number',
      httpsVServerGroupId: 'string',
      id: 'string',
      serviceWeight: 'number',
      slbId: 'string',
      slbIp: 'string',
      slbPort: 'string',
      slbType: 'string',
      statusDesc: 'string',
      type: 'string',
      VServerGroupId: 'string',
      VServiceList: { 'type': 'array', 'itemType': ListGatewaySlbResponseBodyDataVServiceList },
      vsMetaInfo: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.VServiceList)) {
      $dara.Model.validateArray(this.VServiceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListGatewaySlbResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListGatewaySlbResponseBodyData[];
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
   * The returned message.
   * 
   * @example
   * Succ
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EAB345F4-3AC3-560C-B653-65717703****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * - true: The request is successful.
   * - false: The request fails.
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
      code: 'number',
      data: { 'type': 'array', 'itemType': ListGatewaySlbResponseBodyData },
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

