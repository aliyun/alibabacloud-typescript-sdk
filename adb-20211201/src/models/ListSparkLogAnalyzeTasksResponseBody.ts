// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListSparkLogAnalyzeTasksResponseBodyData } from "./ListSparkLogAnalyzeTasksResponseBodyData";


export class ListSparkLogAnalyzeTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListSparkLogAnalyzeTasksResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1DF5AF5B-C803-1861-A0FF-63666A557709
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
      data: ListSparkLogAnalyzeTasksResponseBodyData,
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

