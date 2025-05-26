// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class KillSparkAppRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Spark application that you want to terminate.
   * 
   * This parameter is required.
   * 
   * @example
   * s202204132018hzprec1ac****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * @example
   * amv-bp1ub9grke1****
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

