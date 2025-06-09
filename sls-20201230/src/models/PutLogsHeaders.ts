// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutLogsHeaders extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The compression format. lz4 and gzip are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * lz4
   */
  xLogCompresstype?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      xLogCompresstype: 'x-log-compresstype',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      xLogCompresstype: 'string',
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

