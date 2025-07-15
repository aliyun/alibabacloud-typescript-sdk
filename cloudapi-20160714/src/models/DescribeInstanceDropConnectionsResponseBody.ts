// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceDropConnectionsResponseBodyInstanceDropConnectionsMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The monitoring time. The time follows the ISO 8601 standard. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2023-01-31T01:11:00Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The number of dropped packets in the instance.
   * 
   * @example
   * 0.0
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
  /**
   * @remarks
   * The list of dropped connections in the instance.
   */
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

