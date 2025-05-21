// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisSQLInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * >  You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of all AnalyticDB for MySQL Data Warehouse Edition clusters within a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * am-bp1r053byu48p****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The language of file titles and error messages. Valid values:
   * 
   * *   **zh**: simplified Chinese
   * *   **en**: English
   * *   **ja**: Japanese
   * *   **zh-tw**: traditional Chinese
   * 
   * This parameter is required.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The ID of the query.
   * 
   * >  You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the SQL summary information of a specified AnalyticDB for MySQL cluster, including the query ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 2021070216432217201616806503453******
   */
  processId?: string;
  /**
   * @remarks
   * The IP address and port number of the AnalyticDB for MySQL frontend node on which the SQL statement is executed.
   * 
   * >  You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the SQL summary information of a specified AnalyticDB for MySQL cluster, including the IP address and port number of the frontend node.
   * 
   * @example
   * 192.45.***.***:3145
   */
  processRcHost?: string;
  /**
   * @remarks
   * The execution start time of the SQL statement. Specify the time in the UNIX timestamp format. Unit: milliseconds.
   * 
   * >  You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the SQL summary information of a specified AnalyticDB for MySQL cluster, including the execution start time of the SQL statement.
   * 
   * @example
   * 1625215402000
   */
  processStartTime?: number;
  /**
   * @remarks
   * The state of the SQL statement. Valid values:
   * 
   * *   **running**
   * 
   * *   **finished**
   * 
   * *   **failed**
   * 
   * > You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the SQL summary information of a specified AnalyticDB for MySQL cluster, including the state of the SQL statement.
   * 
   * @example
   * running
   */
  processState?: string;
  /**
   * @remarks
   * The region ID of the cluster.
   * 
   * >  You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      lang: 'Lang',
      processId: 'ProcessId',
      processRcHost: 'ProcessRcHost',
      processStartTime: 'ProcessStartTime',
      processState: 'ProcessState',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      lang: 'string',
      processId: 'string',
      processRcHost: 'string',
      processStartTime: 'number',
      processState: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

