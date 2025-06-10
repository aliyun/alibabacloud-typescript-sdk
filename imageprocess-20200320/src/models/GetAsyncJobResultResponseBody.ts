// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAsyncJobResultResponseBodyData } from "./GetAsyncJobResultResponseBodyData";


export class GetAsyncJobResultResponseBody extends $dara.Model {
  data?: GetAsyncJobResultResponseBodyData;
  /**
   * @example
   * 7CB9B663-3EF8-4C9C-A464-FDA2B5F1E3A4
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
      data: GetAsyncJobResultResponseBodyData,
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

