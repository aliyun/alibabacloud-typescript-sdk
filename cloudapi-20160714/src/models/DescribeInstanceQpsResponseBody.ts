// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceQpsResponseBodyInstanceQpsMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The monitoring time. The time follows the ISO 8601 standard. Format: YYYY-MM-DDThh:mm:ssZ
   * 
   * @example
   * 2022-03-29T06:25:00Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The number of requests sent to the APIs in the instance.
   * 
   * @example
   * 500
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

export class DescribeInstanceQpsResponseBodyInstanceQps extends $dara.Model {
  monitorItem?: DescribeInstanceQpsResponseBodyInstanceQpsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeInstanceQpsResponseBodyInstanceQpsMonitorItem },
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

export class DescribeInstanceQpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of requests sent to the APIs in the instance.
   */
  instanceQps?: DescribeInstanceQpsResponseBodyInstanceQps;
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
      instanceQps: 'InstanceQps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceQps: DescribeInstanceQpsResponseBodyInstanceQps,
      requestId: 'string',
    };
  }

  validate() {
    if(this.instanceQps && typeof (this.instanceQps as any).validate === 'function') {
      (this.instanceQps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

