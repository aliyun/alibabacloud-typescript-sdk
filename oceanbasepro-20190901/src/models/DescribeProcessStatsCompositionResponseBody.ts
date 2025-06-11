// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeProcessStatsCompositionResponseBodyData } from "./DescribeProcessStatsCompositionResponseBodyData";


export class DescribeProcessStatsCompositionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return result.
   */
  data?: DescribeProcessStatsCompositionResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE205C00-30E4-****-****-87E3A8A2AA0C
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
      data: DescribeProcessStatsCompositionResponseBodyData,
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

