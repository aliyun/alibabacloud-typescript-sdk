// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StopElasticsearchIngestionResponse extends $dara.Model {
  headers?: { [key: string]: string };
  statusCode?: number;
  id?: string;
  event?: string;
  static names(): { [key: string]: string } {
    return {
      headers: 'headers',
      statusCode: 'statusCode',
      id: 'id',
      event: 'event',
    };
  }

  static types(): { [key: string]: any } {
    return {
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      statusCode: 'number',
      id: 'string',
      event: 'string',
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

