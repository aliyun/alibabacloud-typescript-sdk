// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGroupQpsResponseBodyGroupQpsMonitorItem extends $dara.Model {
  /**
   * @remarks
   * The point in time.
   * 
   * @example
   * 2023-08-02T09:15:00Z
   */
  itemTime?: string;
  /**
   * @remarks
   * The number of requests at the specified point in time.
   * 
   * @example
   * 17
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

export class DescribeGroupQpsResponseBodyGroupQps extends $dara.Model {
  monitorItem?: DescribeGroupQpsResponseBodyGroupQpsMonitorItem[];
  static names(): { [key: string]: string } {
    return {
      monitorItem: 'MonitorItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorItem: { 'type': 'array', 'itemType': DescribeGroupQpsResponseBodyGroupQpsMonitorItem },
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

export class DescribeGroupQpsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of requests directed to the API group.
   */
  groupQps?: DescribeGroupQpsResponseBodyGroupQps;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D6E46F10-F26C-4AA0-BB69-FE2743D9AE62
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupQps: 'GroupQps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupQps: DescribeGroupQpsResponseBodyGroupQps,
      requestId: 'string',
    };
  }

  validate() {
    if(this.groupQps && typeof (this.groupQps as any).validate === 'function') {
      (this.groupQps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

