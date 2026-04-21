// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OmniAnswerResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  id?: string;
  event?: string;
  body?: string;
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
      body: 'string',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

