// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RecoverIndexRequest extends $dara.Model {
  /**
   * @remarks
   * Required when exporting to OSS.
   */
  bucket?: string;
  /**
   * @remarks
   * The offline deployment ID of the data source.
   * 
   * @example
   * 277
   */
  buildDeployId?: number;
  /**
   * @remarks
   * The data source name.
   * 
   * @example
   * ha-cn-pl32rf0****_test_api
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The full index version.
   * 
   * @example
   * 1653018575
   */
  generation?: string;
  /**
   * @remarks
   * The index name.
   * 
   * @example
   * test_api
   */
  indexName?: string;
  /**
   * @remarks
   * Required when exporting to MaxCompute.
   */
  odpsAccessId?: string;
  /**
   * @remarks
   * Required when exporting to MaxCompute.
   */
  odpsAccessKey?: string;
  /**
   * @remarks
   * Optional when exporting to MaxCompute. Example: pt=20240101.
   */
  odpsPartition?: string;
  /**
   * @remarks
   * Required when exporting to MaxCompute.
   */
  odpsProject?: string;
  /**
   * @remarks
   * Required when exporting to MaxCompute.
   */
  odpsTable?: string;
  /**
   * @remarks
   * The export type. Valid values:
   * 
   * - api: exports data to HDFS. This is the default value.
   * - oss: exports data to OSS.
   * - odps: exports data to MaxCompute.
   */
  outPutType?: string;
  /**
   * @remarks
   * Required when exporting to OSS. The path must start with a forward slash (/) and must contain "opensearch" or the bucket must have the opensearch tag.
   */
  path?: string;
  static names(): { [key: string]: string } {
    return {
      bucket: 'bucket',
      buildDeployId: 'buildDeployId',
      dataSourceName: 'dataSourceName',
      generation: 'generation',
      indexName: 'indexName',
      odpsAccessId: 'odpsAccessId',
      odpsAccessKey: 'odpsAccessKey',
      odpsPartition: 'odpsPartition',
      odpsProject: 'odpsProject',
      odpsTable: 'odpsTable',
      outPutType: 'outPutType',
      path: 'path',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      buildDeployId: 'number',
      dataSourceName: 'string',
      generation: 'string',
      indexName: 'string',
      odpsAccessId: 'string',
      odpsAccessKey: 'string',
      odpsPartition: 'string',
      odpsProject: 'string',
      odpsTable: 'string',
      outPutType: 'string',
      path: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

