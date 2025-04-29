// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeGroupQpsResponseBodyGroupQps } from "./DescribeGroupQpsResponseBodyGroupQps";


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

