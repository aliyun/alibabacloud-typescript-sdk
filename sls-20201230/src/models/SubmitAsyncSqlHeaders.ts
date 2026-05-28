// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitAsyncSqlHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @example
   * application/x-protobuf
   */
  accept?: string;
  /**
   * @example
   * lz4
   */
  acceptEncoding?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      accept: 'Accept',
      acceptEncoding: 'Accept-Encoding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      accept: 'string',
      acceptEncoding: 'string',
    };
  }

  validate() {
    if(this.commonHeaders) {
      $dara.Model.validateMap(this.commonHeaders);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

