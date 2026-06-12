// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogsV2Headers extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The compression method.
   * 
   * - Java, Python, and Go support lz4 and gzip decompression.
   * 
   * - PHP, JavaScript, and C# support gzip decompression only.
   * 
   * @example
   * lz4
   */
  acceptEncoding?: string;
  static names(): { [key: string]: string } {
    return {
      commonHeaders: 'commonHeaders',
      acceptEncoding: 'Accept-Encoding',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commonHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

