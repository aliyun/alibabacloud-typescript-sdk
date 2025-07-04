// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ResultClusterValue } from "./ResultClusterValue";
import { GetIndexResponseBodyResultDataSourceInfo } from "./GetIndexResponseBodyResultDataSourceInfo";
import { GetIndexResponseBodyResultVersions } from "./GetIndexResponseBodyResultVersions";


export class GetIndexResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The cluster information.
   */
  cluster?: { [key: string]: ResultClusterValue };
  /**
   * @remarks
   * The configuration information.
   */
  config?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The configuration that takes effect next time.
   */
  configWhenBuild?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The file content.
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
   * ha-cn-tl32nd2nq01_00
   */
  dataSource?: string;
  /**
   * @remarks
   * The information about the data source.
   */
  dataSourceInfo?: GetIndexResponseBodyResultDataSourceInfo;
  /**
   * @remarks
   * The description of the index version.
   * 
   * @example
   * test index
   */
  description?: string;
  /**
   * @remarks
   * The deployment name of the index.
   * 
   * @example
   * sz_vpc_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * Extended information
   */
  extend?: { [key: string]: string[] };
  /**
   * @remarks
   * The time when full data in the index was last updated.
   * 
   * @example
   * 2024-06-20 08:52:54
   */
  fullUpdateTime?: string;
  /**
   * @remarks
   * The data version.
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
   * 2024-06-20 08:52:54
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
   * The status of the index version. Valid values:
   * 
   * *   NEW: The index version is created.
   * *   PUBLISH: The index version is normal.
   * *   IN_USE: The index version is in use.
   * *   NOT_USE: The index version is not used.
   * *   STOP_USE: The index version is being stopped.
   * *   RESTORE_USE: The index version is being restored.
   * *   FAIL: The index version failed to be created.
   * 
   * @example
   * IN_USE
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
   * The information about the versions.
   */
  versions?: GetIndexResponseBodyResultVersions[];
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      config: 'config',
      configWhenBuild: 'configWhenBuild',
      content: 'content',
      createTime: 'createTime',
      dataSource: 'dataSource',
      dataSourceInfo: 'dataSourceInfo',
      description: 'description',
      domain: 'domain',
      extend: 'extend',
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
      cluster: { 'type': 'map', 'keyType': 'string', 'valueType': ResultClusterValue },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      configWhenBuild: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      content: 'string',
      createTime: 'string',
      dataSource: 'string',
      dataSourceInfo: GetIndexResponseBodyResultDataSourceInfo,
      description: 'string',
      domain: 'string',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': 'string' } },
      fullUpdateTime: 'string',
      fullVersion: 'number',
      incUpdateTime: 'string',
      indexSize: 'number',
      indexStatus: 'string',
      name: 'string',
      partition: 'number',
      updateTime: 'string',
      versions: { 'type': 'array', 'itemType': GetIndexResponseBodyResultVersions },
    };
  }

  validate() {
    if(this.cluster) {
      $dara.Model.validateMap(this.cluster);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.configWhenBuild) {
      $dara.Model.validateMap(this.configWhenBuild);
    }
    if(this.dataSourceInfo && typeof (this.dataSourceInfo as any).validate === 'function') {
      (this.dataSourceInfo as any).validate();
    }
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
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

