// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRealtimeLogDeliveryResponseBody } from "./ListRealtimeLogDeliveryResponseBody";


export class ListRealtimeLogDeliveryResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: ListRealtimeLogDeliveryResponseBody;
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
      body: ListRealtimeLogDeliveryResponseBody,
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

