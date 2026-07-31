// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckFormationSchemaExistsRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Lakehouse Edition (V3.0) clusters in a region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp11q28kvl688****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * Specifies whether to enable prefix mode. Valid values:
   * 
   * - true: Enable prefix mode.
   * - false: Disable prefix mode.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  prefixMode?: boolean;
  /**
   * @remarks
   * RegionId
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * schema 。
   * 
   * This parameter is required.
   * 
   * @example
   * testdb01
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      prefixMode: 'PrefixMode',
      regionId: 'RegionId',
      schema: 'Schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      prefixMode: 'boolean',
      regionId: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

