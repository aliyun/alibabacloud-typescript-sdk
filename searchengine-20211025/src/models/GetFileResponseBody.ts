// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The content of the file.
   * 
   * @example
   * {"summarys":{"parameter":{"file_compressor":"zstd"},"summary_fields":["id"]},"file_compress":[{"name":"file_compressor","type":"zstd"},{"name":"no_compressor","type":""}],"indexs":[{"index_fields":"name","index_name":"ids","index_type":"STRING"},{"has_primary_key_attribute":true,"index_fields":"id","is_primary_key_sorted":false,"index_name":"id","index_type":"PRIMARYKEY64"}],"attributes":[{"file_compress":"no_compressor","field_name":"id"}],"fields":[{"user_defined_param":{},"compress_type":"uniq","field_type":"STRING","field_name":"id"},{"compress_type":"uniq","field_type":"STRING","field_name":"name"}],"table_name":"api"}
   */
  content?: string;
  /**
   * @remarks
   * The data source.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  dataSource?: string;
  /**
   * @remarks
   * The extended information.
   */
  extend?: { [key: string]: string[] };
  /**
   * @remarks
   * The full path of the file.
   * 
   * @example
   * /schema.json
   */
  fullPathName?: string;
  /**
   * @remarks
   * Indicates whether the path points to a directory.
   * 
   * @example
   * true
   */
  isDir?: boolean;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * testFile
   */
  name?: string;
  /**
   * @remarks
   * The number of shards.
   * 
   * @example
   * 2
   */
  partition?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      dataSource: 'dataSource',
      extend: 'extend',
      fullPathName: 'fullPathName',
      isDir: 'isDir',
      name: 'name',
      partition: 'partition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      dataSource: 'string',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      fullPathName: 'string',
      isDir: 'boolean',
      name: 'string',
      partition: 'number',
    };
  }

  validate() {
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2AE63638-5420-56DC-BF59-37D8174039A0
   */
  requestId?: string;
  /**
   * @remarks
   * The index information.
   */
  result?: GetFileResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: GetFileResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

