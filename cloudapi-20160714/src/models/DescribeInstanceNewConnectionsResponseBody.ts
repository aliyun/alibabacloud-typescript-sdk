// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceNewConnectionsResponseBodyInstanceNewConnectionsMonitorItem extends $dara.Model {
  itemTime?: string;
  itemValue?: string;
  static names(): { [key: string]: string } {
    return {
      itemTime: 'ItemTime',
      itemValue: 'ItemValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class DescribeInstanceNewConnectionsResponseBodyInstanceNewConnections extends $dara.Model {
  monitorItem?: DescribeInstanceNewConnectionsResponseBodyInstanceNewConnectionsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceNewConnectionsResponseBodyInstanceNewConnectionsMonitorItem },
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

export class DescribeInstanceNewConnectionsResponseBody extends $dara.Model {
  instanceNewConnections?: DescribeInstanceNewConnectionsResponseBodyInstanceNewConnections;
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
      instanceNewConnections: 'InstanceNewConnections',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceNewConnections: DescribeInstanceNewConnectionsResponseBodyInstanceNewConnections,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceNewConnections && typeof (this.instanceNewConnections as any).validate === 'function') {
      (this.instanceNewConnections as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

