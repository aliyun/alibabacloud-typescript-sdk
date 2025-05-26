// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SenderStatisticsDetailByParamResponseBodyData } from "./SenderStatisticsDetailByParamResponseBodyData";


export class SenderStatisticsDetailByParamResponseBody extends $dara.Model {
  /**
   * @remarks
   * Used for pagination. If there are more results, set this returned value to the NextStart in the next request.
   * 
   * @example
   * 90f0243616#203#a***@example.net-1658817689#a***@example.net.247141122178
   */
  nextStart?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * B5AB8EBB-EE64-4BB2-B085-B92CC5DEDC41
   */
  requestId?: string;
  /**
   * @remarks
   * Detailed records
   */
  data?: SenderStatisticsDetailByParamResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      nextStart: 'NextStart',
      requestId: 'RequestId',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextStart: 'string',
      requestId: 'string',
      data: SenderStatisticsDetailByParamResponseBodyData,
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

