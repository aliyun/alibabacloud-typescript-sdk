// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProcessListResponseBodyProcessList } from "./DescribeProcessListResponseBodyProcessList";


export class DescribeProcessListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queries.
   */
  processList?: DescribeProcessListResponseBodyProcessList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FD61BB0D-788A-5185-A8E3-1B90BA8F6F04
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      processList: 'ProcessList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      processList: DescribeProcessListResponseBodyProcessList,
      requestId: 'string',
    };
  }

  validate() {
    if(this.processList && typeof (this.processList as any).validate === 'function') {
      (this.processList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

