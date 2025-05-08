// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListGatewaySlbResponseBodyDataVServiceList } from "./ListGatewaySlbResponseBodyDataVserviceList";


export class ListGatewaySlbResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the edit operation is supported.
   * 
   * @example
   * false
   */
  editEnable?: boolean;
  /**
   * @remarks
   * The ID of the gateway.
   * 
   * @example
   * 1
   */
  gatewayId?: string;
  /**
   * @remarks
   * The mode of the SLB instance.
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
   * The port number of the HTTP virtual service group.
   * 
   * @example
   * 80
   */
  httpPort?: number;
  /**
   * @remarks
   * The port number of the HTTPS virtual service group.
   * 
   * @example
   * 443
   */
  httpsPort?: number;
  /**
   * @remarks
   * The ID of the HTTPS virtual service group.
   * 
   * @example
   * 353
   */
  httpsVServerGroupId?: string;
  /**
   * @remarks
   * The ID.
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
   * The ID of the SLB instance.
   * 
   * @example
   * lb-bp1kmnli3hdpreptw2ah3
   */
  slbId?: string;
  /**
   * @remarks
   * The IP address of the SLB instance.
   * 
   * @example
   * 121.199.XX.XX
   */
  slbIp?: string;
  /**
   * @remarks
   * The port number of the SLB instance.
   * 
   * @example
   * 80,443
   */
  slbPort?: string;
  slbType?: string;
  /**
   * @remarks
   * The description of the status.
   * 
   * @example
   * Associating
   */
  statusDesc?: string;
  /**
   * @remarks
   * The type.
   * 
   * @example
   * PUB_NET
   */
  type?: string;
  /**
   * @remarks
   * The ID of the HTTP virtual service group.
   * 
   * @example
   * 353
   */
  VServerGroupId?: string;
  VServiceList?: ListGatewaySlbResponseBodyDataVServiceList[];
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

