// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PreloadSparkAppMetricsRequest extends $dara.Model {
  /**
   * @remarks
   * The Spark application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s202204221525hzca7d8140000003
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * @example
   * amv-bp1mfe9qmsw1dzyg
   */
  DBClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

