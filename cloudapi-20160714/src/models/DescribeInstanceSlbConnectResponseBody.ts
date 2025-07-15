// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceSlbConnectResponseBodyInstanceSlbConnectMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The metric. Valid values:
   * 
   * *   InstanceMaxConnection: the maximum number of connections
   * *   InstanceInactiveConnection: the number of inactive connections
   * *   InstanceActiveConnection: the number of active connections
   * 
   * @example
   * InstanceActiveConnection
   */
  item?: string;
  /**
   * @remarks
   * The monitoring time. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2022-09-15T15:07:06Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The number of concurrent connections in the instance.
   * 
   * @example
   * 12
   */
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      item: 'Item',
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      item: 'string',
      itemTime: 'string',
      itemValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSlbConnectResponseBodyInstanceSlbConnect extends $dara.Model {
  monitorItem?: DescribeInstanceSlbConnectResponseBodyInstanceSlbConnectMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceSlbConnectResponseBodyInstanceSlbConnectMonitorItem },
    };
  }

  validate() {
    if(Array.isArray(this.monitorItem)) {
      $dara.Model.validateArray(this.monitorItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstanceSlbConnectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of concurrent connections in the instance.
   */
  instanceSlbConnect?: DescribeInstanceSlbConnectResponseBodyInstanceSlbConnect;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * E7FE7172-AA75-5880-B6F7-C00893E9BC06
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceSlbConnect: 'InstanceSlbConnect',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceSlbConnect: DescribeInstanceSlbConnectResponseBodyInstanceSlbConnect,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceSlbConnect && typeof (this.instanceSlbConnect as any).validate === 'function') {
      (this.instanceSlbConnect as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

