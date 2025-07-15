// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceNewConnectionsResponseBodyInstanceNewConnectionsMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The monitoring time. The time follows the ISO 8601 standard and UTC time is used. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2022-10-08T02:08:00Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The number of new connections in the instance.
   * 
   * @example
   * 16
   */
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
  /**
   * @remarks
   * The list of new connections in the instance.
   */
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

