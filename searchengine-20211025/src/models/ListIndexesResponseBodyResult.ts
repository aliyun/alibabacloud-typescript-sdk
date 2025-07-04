// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIndexesResponseBodyResultDataSourceInfo } from "./ListIndexesResponseBodyResultDataSourceInfo";
import { ListIndexesResponseBodyResultVersions } from "./ListIndexesResponseBodyResultVersions";


export class ListIndexesResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The index schema, which is a JSON string.
   * 
   * @example
   * {"summarys":{"parameter":{"file_compressor":"zstd"},"summary_fields":["id"]},"file_compress":[{"name":"file_compressor","type":"zstd"},{"name":"no_compressor","type":""}],"indexs":[{"index_fields":"name","index_name":"ids","index_type":"STRING"},{"has_primary_key_attribute":true,"index_fields":"id","is_primary_key_sorted":false,"index_name":"id","index_type":"PRIMARYKEY64"}],"attributes":[{"file_compress":"no_compressor","field_name":"id"}],"fields":[{"user_defined_param":{},"compress_type":"uniq","field_type":"STRING","field_name":"id"},{"compress_type":"uniq","field_type":"STRING","field_name":"name"}],"table_name":"api"}
   */
  content?: string;
  createTime?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * ha-cn-7mz2kvu2c01_table4
   */
  dataSource?: string;
  /**
   * @remarks
   * The information about the data source.
   */
  dataSourceInfo?: ListIndexesResponseBodyResultDataSourceInfo;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Description
   */
  description?: string;
  /**
   * @remarks
   * The deployment name of the index.
   * 
   * @example
   * test
   */
  domain?: string;
  /**
   * @remarks
   * The time when full data in the index was last updated.
   * 
   * @example
   * 2023-07-05 10:40:38
   */
  fullUpdateTime?: string;
  /**
   * @remarks
   * The full version of the index.
   * 
   * @example
   * 1688523414
   */
  fullVersion?: number;
  /**
   * @remarks
   * The time when incremental data in the index was last updated.
   * 
   * @example
   * 2023-07-05 10:58:33
   */
  incUpdateTime?: string;
  /**
   * @remarks
   * The index size.
   * 
   * @example
   * 4689
   */
  indexSize?: number;
  /**
   * @remarks
   * The index ststus. Valid values: NEW and PUBLISH.
   * 
   * @example
   * " "
   */
  indexStatus?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * general
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
  updateTime?: string;
  /**
   * @remarks
   * The index versions.
   */
  versions?: ListIndexesResponseBodyResultVersions[];
  static names(): { [key: string]: string } {
    return {
      content: 'content',
      createTime: 'createTime',
      dataSource: 'dataSource',
      dataSourceInfo: 'dataSourceInfo',
      description: 'description',
      domain: 'domain',
      fullUpdateTime: 'fullUpdateTime',
      fullVersion: 'fullVersion',
      incUpdateTime: 'incUpdateTime',
      indexSize: 'indexSize',
      indexStatus: 'indexStatus',
      name: 'name',
      partition: 'partition',
      updateTime: 'updateTime',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      createTime: 'string',
      dataSource: 'string',
      dataSourceInfo: ListIndexesResponseBodyResultDataSourceInfo,
      description: 'string',
      domain: 'string',
      fullUpdateTime: 'string',
      fullVersion: 'number',
      incUpdateTime: 'string',
      indexSize: 'number',
      indexStatus: 'string',
      name: 'string',
      partition: 'number',
      updateTime: 'string',
      versions: { 'type': 'array', 'itemType': ListIndexesResponseBodyResultVersions },
    };
  }

  validate() {
    if(this.dataSourceInfo && typeof (this.dataSourceInfo as any).validate === 'function') {
      (this.dataSourceInfo as any).validate();
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

