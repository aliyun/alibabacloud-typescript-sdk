// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDropConnectionsResponseBodyInstanceDropConnectionsMonitorItem extends $dara.Model {
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

export class DescribeInstanceDropConnectionsResponseBodyInstanceDropConnections extends $dara.Model {
  monitorItem?: DescribeInstanceDropConnectionsResponseBodyInstanceDropConnectionsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceDropConnectionsResponseBodyInstanceDropConnectionsMonitorItem },
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

export class DescribeInstanceDropConnectionsResponseBody extends $dara.Model {
  instanceDropConnections?: DescribeInstanceDropConnectionsResponseBodyInstanceDropConnections;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BA984
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceDropConnections: 'InstanceDropConnections',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceDropConnections: DescribeInstanceDropConnectionsResponseBodyInstanceDropConnections,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceDropConnections && typeof (this.instanceDropConnections as any).validate === 'function') {
      (this.instanceDropConnections as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

