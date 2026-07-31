// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDiagnosisSQLInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * > You can call the [DescribeDBClusters](https://help.aliyun.com/document_detail/129857.html) operation to query the cluster IDs of AnalyticDB for MySQL clusters in a specific region.
   * 
   * This parameter is required.
   * 
   * @example
   * amv-bp1r053by****
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The language of the file title and error messages in the downloaded file. Valid values:
   * - **zh**: simplified Chinese.
   * - **en**: English.
   * - **ja**: Japanese.
   * - **zh-tw**: traditional Chinese.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The query ID.
   * > You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the SQL summary information of a specific AnalyticDB for MySQL cluster, including the query ID.
   * 
   * @example
   * 20210702164322172016168****
   */
  processId?: string;
  /**
   * @remarks
   * The IP address and port number of the AnalyticDB for MySQL frontend node that executes the SQL statement.
   * > You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the SQL summary information of a specific AnalyticDB for MySQL cluster, including the IP address and port number of the frontend node.
   * 
   * @example
   * 192.45.***.***:3145
   */
  processRcHost?: string;
  /**
   * @remarks
   * The start time of the SQL statement execution. Specify the value as a UNIX timestamp in milliseconds.
   * > You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the SQL summary information of a specific AnalyticDB for MySQL cluster, including the start time of the SQL statement execution.
   * 
   * @example
   * 1625215402000
   */
  processStartTime?: number;
  /**
   * @remarks
   * The status of the SQL statement. Valid values:
   * - **running**: The SQL statement is being executed.
   * - **finished**: The SQL statement has been executed.
   * - **failed**: The SQL statement failed to be executed.
   * > You can call the [DescribeDiagnosisRecords](https://help.aliyun.com/document_detail/308207.html) operation to query the SQL summary information of a specific AnalyticDB for MySQL cluster, including the status of the SQL statement.
   * 
   * @example
   * running
   */
  processState?: string;
  /**
   * @remarks
   * The region ID.
   * > You can call the [DescribeRegions](https://help.aliyun.com/document_detail/143074.html) operation to query the region IDs supported by AnalyticDB for MySQL.
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

