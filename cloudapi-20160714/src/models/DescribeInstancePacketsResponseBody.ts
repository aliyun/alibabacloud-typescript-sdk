// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstancePacketsResponseBodyInstancePacketsMonitorItem extends $dara.Model {
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

export class DescribeInstancePacketsResponseBodyInstancePackets extends $dara.Model {
  monitorItem?: DescribeInstancePacketsResponseBodyInstancePacketsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstancePacketsResponseBodyInstancePacketsMonitorItem },
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

export class DescribeInstancePacketsResponseBody extends $dara.Model {
  instancePackets?: DescribeInstancePacketsResponseBodyInstancePackets;
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
      instancePackets: 'InstancePackets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instancePackets: DescribeInstancePacketsResponseBodyInstancePackets,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instancePackets && typeof (this.instancePackets as any).validate === 'function') {
      (this.instancePackets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

