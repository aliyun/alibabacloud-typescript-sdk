// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTrafficResponseBodyInstanceTrafficMonitorItem extends $dara.Model {
  item?: string;
  itemTime?: string;
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

