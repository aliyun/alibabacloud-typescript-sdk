// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KillQueryResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  rawData?: { [key: string]: any };
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      rawData: 'RawData',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      rawData: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.rawData) {
      $dara.Model.validateMap(this.rawData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

