// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryTraceM3u8JobResponseBodyData } from "./QueryTraceM3u8jobResponseBodyData";


export class QueryTraceM3u8JobResponseBody extends $dara.Model {
  data?: QueryTraceM3u8JobResponseBodyData[];
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
   * 5CA6E020-4102-4FFF-AA56-5ED7ECD8****
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
      data: { 'type': 'array', 'itemType': QueryTraceM3u8JobResponseBodyData },
      message: 'string',
      requestId: 'string',
      statusCode: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

