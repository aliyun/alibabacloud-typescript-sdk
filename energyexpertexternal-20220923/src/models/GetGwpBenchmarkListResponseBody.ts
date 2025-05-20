// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetGwpBenchmarkListResponseBodyData } from "./GetGwpBenchmarkListResponseBodyData";


export class GetGwpBenchmarkListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetGwpBenchmarkListResponseBodyData;
  /**
   * @remarks
   * The ID of the request. The value is unique for each request. This facilitates subsequent troubleshooting.
   * 
   * @example
   * A8AEC6D9-A359-5169-BD1A-BD848BA60D65
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetGwpBenchmarkListResponseBodyData,
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

