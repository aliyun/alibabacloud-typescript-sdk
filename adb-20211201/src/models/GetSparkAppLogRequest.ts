// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkAppLogRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * > You can call the [ListSparkApps](https://help.aliyun.com/document_detail/612475.html) operation to query the ID of the Spark application.
   * 
   * This parameter is required.
   * 
   * @example
   * s202206061441hz22a35ab000****
   */
  appId?: string;
  /**
   * @remarks
   * <props="china">The ID of the Enterprise Edition, Basic Edition, or Data Lakehouse Edition cluster.
   * <props="intl">The ID of the Data Lakehouse Edition cluster.
   * 
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/454250.html) operation to query the IDs of all clusters in the target region.
   * 
   * @example
   * amv-2ze6fl8ud7t***
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The number of log lines. Valid values: 1 to 500. Default value: 300.
   * 
   * @example
   * 20
   */
  logLength?: number;
  /**
   * @remarks
   * The page number for reading logs.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of data rows per page.
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

