// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodesIspCityNode extends $dara.Model {
  /**
   * @remarks
   * The code of the city where the monitored node is deployed.
   * 
   * @example
   * 503
   */
  cityCode?: string;
  /**
   * @remarks
   * The display name of the city where the monitored node is deployed.
   * 
   * @example
   * Zhangjiakou
   */
  cityName?: string;
  /**
   * @remarks
   * Indicates whether the monitored node is selected for the health check by default.
   * 
   * @example
   * true
   */
  defaultSelected?: boolean;
  /**
   * @remarks
   * The name of the group to which the monitored node belongs.
   * 
   * Valid values: Overseas Nodes, BGP Nodes, and ISP Nodes.
   * 
   * @example
   * Overseas Nodes
   */
  groupName?: string;
  /**
   * @remarks
   * The type of the group to which the monitored node belongs.
   * 
   * Valid values: BGP, OVERSEAS, and ISP.
   * 
   * @example
   * OVERSEAS
   */
  groupType?: string;
  /**
   * @remarks
   * The code of the Internet service provider (ISP) to which the monitored node belongs.
   * 
   * *   If the value of the GroupType parameter is BGP or OVERSEAS, the value of IspCode is 465 by default.
   * *   If the value of the GroupType parameter is not BGP or OVERSEAS, valid values of IspCode are 232, 132, and 5. and is used together with CityCode.
   * 
   * @example
   * 465
   */
  ispCode?: string;
  /**
   * @remarks
   * The display name of the ISP to which the monitored node belongs.
   * 
   * @example
   * Alibaba
   */
  ispName?: string;
  /**
   * @remarks
   * Indicates whether the monitored node is deployed in the Chinese mainland.
   * 
   * @example
   * true
   */
  mainland?: boolean;
  static names(): { [key: string]: string } {
    return {
      cityCode: 'CityCode',
      cityName: 'CityName',
      defaultSelected: 'DefaultSelected',
      groupName: 'GroupName',
      groupType: 'GroupType',
      ispCode: 'IspCode',
      ispName: 'IspName',
      mainland: 'Mainland',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cityCode: 'string',
      cityName: 'string',
      defaultSelected: 'boolean',
      groupName: 'string',
      groupType: 'string',
      ispCode: 'string',
      ispName: 'string',
      mainland: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodes extends $dara.Model {
  ispCityNode?: DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodesIspCityNode[];
  static names(): { [key: string]: string } {
    return {
      ispCityNode: 'IspCityNode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNode: { 'type': 'array', 'itemType': DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodesIspCityNode },
    };
  }

  validate() {
    if(Array.isArray(this.ispCityNode)) {
      $dara.Model.validateArray(this.ispCityNode);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGtmMonitorAvailableConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The monitored nodes.
   */
  ispCityNodes?: DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodes;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6856BCF6-11D6-4D7E-AC53-FD579933522B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      ispCityNodes: 'IspCityNodes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ispCityNodes: DescribeGtmMonitorAvailableConfigResponseBodyIspCityNodes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ispCityNodes && typeof (this.ispCityNodes as any).validate === 'function') {
      (this.ispCityNodes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

