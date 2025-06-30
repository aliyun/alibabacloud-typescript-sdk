// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the data asset, such as an instance, a database, and a bucket. You can call the [DescribeDataLimits](~~DescribeDataLimits~~) operation to query the unique ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  dataLimitId?: number;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 1
   */
  featureType?: number;
  /**
   * @remarks
   * The interval between two consecutive custom scan tasks. Unit: days. Valid values: 1 to 2147483648.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  intervalDay?: number;
  /**
   * @remarks
   * The language of the content within the request and response.
   * 
   * *   **zh**: Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The data to be scanned in the Object Storage Service (OSS) bucket. Prefix match, suffix match, and regular expression match are supported.
   * 
   * @example
   * /test/test
   */
  ossScanPath?: string;
  /**
   * @remarks
   * The type of the service to which the data assets to be scanned belong. Valid values include **1**, **2**, **3**, **4**, and **5**. The value 1 indicates MaxCompute. The value 2 indicates OSS. The value 3 indicates AnalyticDB for MySQL. The value 4 indicates Tablestore. The value 5 indicates ApsaraDB RDS.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  resourceType?: number;
  /**
   * @remarks
   * The time when the scan task is executed next time. Unit: hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  runHour?: number;
  /**
   * @remarks
   * The time when the scan task is executed next time. Unit: minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  runMinute?: number;
  /**
   * @remarks
   * The matching rule that specifies the scan scope of the custom scan task. This parameter takes effect only if you set the **ScanRangeContent** parameter. Valid values:
   * 
   * *   **0**: exact match
   * *   **1**: prefix match
   * *   **2**: suffix match
   * *   **3**: regular expression match
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  scanRange?: number;
  /**
   * @remarks
   * The data to be scanned in a structured data asset. Prefix match, suffix match, and regular expression match are supported.
   * 
   * This parameter is required.
   * 
   * @example
   * datamask/
   */
  scanRangeContent?: string;
  /**
   * @remarks
   * This parameter is deprecated.
   * 
   * @example
   * 39.170.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The name of the scan task.
   * 
   * This parameter is required.
   * 
   * @example
   * scan-test-sample****
   */
  taskName?: string;
  /**
   * @remarks
   * The account that is used to create the scan task.
   * 
   * @example
   * demo
   */
  taskUserName?: string;
  static names(): { [key: string]: string } {
    return {
      dataLimitId: 'DataLimitId',
      featureType: 'FeatureType',
      intervalDay: 'IntervalDay',
      lang: 'Lang',
      ossScanPath: 'OssScanPath',
      resourceType: 'ResourceType',
      runHour: 'RunHour',
      runMinute: 'RunMinute',
      scanRange: 'ScanRange',
      scanRangeContent: 'ScanRangeContent',
      sourceIp: 'SourceIp',
      taskName: 'TaskName',
      taskUserName: 'TaskUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataLimitId: 'number',
      featureType: 'number',
      intervalDay: 'number',
      lang: 'string',
      ossScanPath: 'string',
      resourceType: 'number',
      runHour: 'number',
      runMinute: 'number',
      scanRange: 'number',
      scanRangeContent: 'string',
      sourceIp: 'string',
      taskName: 'string',
      taskUserName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

