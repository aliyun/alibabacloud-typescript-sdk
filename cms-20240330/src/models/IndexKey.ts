// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { IndexJsonKey } from "./IndexJsonKey";


export class IndexKey extends $dara.Model {
  chn?: boolean;
  embedding?: string;
  jsonKeys?: { [key: string]: IndexJsonKey };
  type?: string;
  static names(): { [key: string]: string } {
    return {
      chn: 'chn',
      embedding: 'embedding',
      jsonKeys: 'jsonKeys',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      chn: 'boolean',
      embedding: 'string',
      jsonKeys: { 'type': 'map', 'keyType': 'string', 'valueType': IndexJsonKey },
      type: 'string',
    };
  }

  validate() {
    if(this.jsonKeys) {
      $dara.Model.validateMap(this.jsonKeys);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

