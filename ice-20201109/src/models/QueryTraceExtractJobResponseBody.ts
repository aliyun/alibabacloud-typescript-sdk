// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTraceExtractJobResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The trace watermark information.
   */
  trace?: string;
  static names(): { [key: string]: string } {
    return {
      trace: 'Trace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTraceExtractJobResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryTraceExtractJobResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * ok
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * *****ACB-44F2-5F2D-88D7-1283E70*****
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * 
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

