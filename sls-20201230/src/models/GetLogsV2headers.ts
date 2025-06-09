// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogsV2Headers extends $dara.Model {
  commonHeaders?: { [key: string]: string };
  /**
   * @remarks
   * The compression format.
   * 
   * *   For Java, Python, and Go, only the lz4 and gzip algorithms are supported for decompression.
   * *   For PHP, JavaScript, and C#, only the gzip algorithm is supported for decompression.
   * 
   * This parameter is required.
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

