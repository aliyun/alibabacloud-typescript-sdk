// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkAppLogRequest extends $dara.Model {
  /**
   * @remarks
   * The Spark application ID.
   * 
   * > You can call the [ListSparkApps](https://help.aliyun.com/document_detail/612475.html) operation to query the Spark application ID.
   * 
   * This parameter is required.
   * 
   * @example
   * s202206061441hz22a35ab000****
   */
  appId?: string;
  /**
   * @remarks
   * The ID of the AnalyticDB for MySQL Data Lakehouse Edition cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all AnalyticDB for MySQL clusters within a region.
   * 
   * @example
   * amv-2ze6fl8ud7t***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of log entries to return. Valid values: 1 to 500. Default value: 300.
   * 
   * @example
   * 20
   */
  logLength?: number;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 500
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      DBClusterId: 'DBClusterId',
      logLength: 'LogLength',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      DBClusterId: 'string',
      logLength: 'number',
      pageNumber: 'number',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

