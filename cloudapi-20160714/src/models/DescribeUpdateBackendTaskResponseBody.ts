// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResults } from "./DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResults";


export class DescribeUpdateBackendTaskResponseBody extends $dara.Model {
  apiUpdateBackendResults?: DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResults;
  /**
   * @example
   * CEF72CEB-54B6-4AE8-B225-F876FF7BZ016
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiUpdateBackendResults: 'ApiUpdateBackendResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiUpdateBackendResults: DescribeUpdateBackendTaskResponseBodyApiUpdateBackendResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.apiUpdateBackendResults && typeof (this.apiUpdateBackendResults as any).validate === 'function') {
      (this.apiUpdateBackendResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

