// This file is auto-generated, don't edit it
import { Readable } from 'stream';
import * as $dara from '@darabonba/typescript';


export class InvokeFunctionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  body?: Readable;
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
      body: 'Readable',
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

