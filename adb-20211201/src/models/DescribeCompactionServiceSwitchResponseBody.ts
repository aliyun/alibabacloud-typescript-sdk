// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCompactionServiceSwitchResponseBodyData } from "./DescribeCompactionServiceSwitchResponseBodyData";


export class DescribeCompactionServiceSwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: DescribeCompactionServiceSwitchResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D761DA51-12F8-5457-AAA9-F52B9F436D2D
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
      data: DescribeCompactionServiceSwitchResponseBodyData,
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

