// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCopyrightExtractJobResponseBodyData extends $dara.Model {
  message?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryCopyrightExtractJobResponseBody extends $dara.Model {
  data?: QueryCopyrightExtractJobResponseBodyData;
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
   * *****ACB-44F2-5F2D-88D7-1283E70*****
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
      data: QueryCopyrightExtractJobResponseBodyData,
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

