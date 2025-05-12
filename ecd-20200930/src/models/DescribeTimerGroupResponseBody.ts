// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTimerGroupResponseBodyData } from "./DescribeTimerGroupResponseBodyData";


export class DescribeTimerGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the scheduled task group.
   */
  data?: DescribeTimerGroupResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeTimerGroupResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

