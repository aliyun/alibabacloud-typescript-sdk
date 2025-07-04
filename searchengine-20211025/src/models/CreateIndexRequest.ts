// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateIndexRequestDataSourceInfo } from "./CreateIndexRequestDataSourceInfo";


export class CreateIndexRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently built.
   * 
   * @example
   * 2
   */
  buildParallelNum?: number;
  /**
   * @remarks
   * The index schema.
   * 
   * @example
   * {\\"summarys\\":{\\"summary_fields\\":[\\"id\\"]},\\"indexs\\":[{\\"index_name\\":\\"index_id\\",\\"index_type\\":\\"PRIMARYKEY64\\",\\"index_fields\\":\\"id\\",\\"has_primary_key_attribute\\":true,\\"is_primary_key_sorted\\":false}],\\"attributes\\":[\\"id\\"],\\"fields\\":[{\\"field_name\\":\\"id\\",\\"field_type\\":\\"UINT16\\"}],\\"table_name\\":\\"index_2\\"}
   */
  content?: string;
  /**
   * @remarks
   * The name of the data source.
   * 
   * @example
   * test1
   */
  dataSource?: string;
  /**
   * @remarks
   * The information about the data source. This parameter is required for an OpenSearch Vector Search Edition instance of the new version.
   */
  dataSourceInfo?: CreateIndexRequestDataSourceInfo;
  /**
   * @remarks
   * The data center in which the data source is deployed.
   * 
   * @example
   * vpc_hz_domain_1
   */
  domain?: string;
  /**
   * @remarks
   * The extended content of the field configuration. key specifies the vector field and the field that requires embedding.
   * 
   * @example
   * {
   *         "vector":
   *         [
   *             "source_image_vector"
   *         ],
   *         "embeding":
   *         [
   *             "source_image"
   *         ],
   *         "description":
   *         []
   *     }
   */
  extend?: { [key: string]: any };
  /**
   * @remarks
   * The maximum number of full indexes that can be concurrently merged.
   * 
   * @example
   * 2
   */
  mergeParallelNum?: number;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * ha-cn-zvp2qr1sk01_qrs
   */
  name?: string;
  /**
   * @remarks
   * The number of data shards.
   * 
   * @example
   * 20211202
   */
  partition?: number;
  /**
   * @remarks
   * Specifies whether to perform only a dry run, without performing the actual request. The system only checks the validity of the data source. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      buildParallelNum: 'buildParallelNum',
      content: 'content',
      dataSource: 'dataSource',
      dataSourceInfo: 'dataSourceInfo',
      domain: 'domain',
      extend: 'extend',
      mergeParallelNum: 'mergeParallelNum',
      name: 'name',
      partition: 'partition',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildParallelNum: 'number',
      content: 'string',
      dataSource: 'string',
      dataSourceInfo: CreateIndexRequestDataSourceInfo,
      domain: 'string',
      extend: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      mergeParallelNum: 'number',
      name: 'string',
      partition: 'number',
      dryRun: 'boolean',
    };
  }

  validate() {
    if(this.dataSourceInfo && typeof (this.dataSourceInfo as any).validate === 'function') {
      (this.dataSourceInfo as any).validate();
    }
    if(this.extend) {
      $dara.Model.validateMap(this.extend);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

