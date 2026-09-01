// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryColumnarLogSSEResponseBody } from "./QueryColumnarLogSseresponseBody";


export class QueryColumnarLogSSEResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  id?: string;
  event?: string;
  body?: QueryColumnarLogSSEResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      id: 'id',
      event: 'event',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      id: 'string',
      event: 'string',
      body: QueryColumnarLogSSEResponseBody,
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

