// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTrafficResponseBodyInstanceTrafficMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The metric. Valid values:
   * 
   * *   inbound: traffic consumed by requests
   * *   outbound: traffic consumed by responses
   * 
   * @example
   * inbound
   */
  item?: string;
  /**
   * @remarks
   * The monitoring time. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2022-04-01T06:34:03Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The amount of traffic consumed by the requests and responses in the instance.
   * 
   * @example
   * 10
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

export class DescribeInstanceTrafficResponseBodyInstanceTraffic extends $dara.Model {
  monitorItem?: DescribeInstanceTrafficResponseBodyInstanceTrafficMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceTrafficResponseBodyInstanceTrafficMonitorItem },
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

export class DescribeInstanceTrafficResponseBody extends $dara.Model {
  /**
   * @remarks
   * The traffic consumed by the requests and responses in the instance.
   */
  instanceTraffic?: DescribeInstanceTrafficResponseBodyInstanceTraffic;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ004
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceTraffic: 'InstanceTraffic',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceTraffic: DescribeInstanceTrafficResponseBodyInstanceTraffic,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceTraffic && typeof (this.instanceTraffic as any).validate === 'function') {
      (this.instanceTraffic as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

