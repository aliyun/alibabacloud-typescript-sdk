// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryQwenConferenceSgTicketSearchPopResponseBody } from "./QueryQwenConferenceSgTicketSearchPopResponseBody";


export class QueryQwenConferenceSgTicketSearchPopResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: QueryQwenConferenceSgTicketSearchPopResponseBody;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      body: QueryQwenConferenceSgTicketSearchPopResponseBody,
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

