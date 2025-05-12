// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTraceExtractJobResponseBodyData } from "./QueryTraceExtractJobResponseBodyData";


export class QueryTraceExtractJobResponseBody extends $dara.Model {
  data?: QueryTraceExtractJobResponseBodyData;
  /**
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 7D9F3008-9316-5817-BFA3-6180D752039D
   */
  requestId?: string;
  /**
   * @example
   * 200
   */
  statusCode?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      statusCode: 'StatusCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: QueryTraceExtractJobResponseBodyData,
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
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

