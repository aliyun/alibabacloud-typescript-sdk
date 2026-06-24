// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the data asset. The asset can be an instance, a database, or a bucket. Call the [DescribeDataLimits](~~DescribeDataLimits~~) operation to obtain this ID.
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
   * The interval in days between two consecutive custom scan tasks. The value must be between 1 and 2147483648.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  intervalDay?: number;
  /**
   * @remarks
   * The language of the request and response.
   * 
   * - **zh**: Chinese.
   * 
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The scan scope for OSS assets. You can specify a prefix, a suffix, or a regular expression to match objects.
   * 
   * @example
   * /test/test
   */
  ossScanPath?: string;
  /**
   * @remarks
   * The type of resource to query. Valid values:
   * 
   * - **1**: MaxCompute.
   * 
   * - **2**: OSS.
   * 
   * - **3**: AnalyticDB.
   * 
   * - **4**: Tablestore.
   * 
   * - **5**: RDS.
   * 
   * - **6**: a self-managed database.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  resourceType?: number;
  /**
   * @remarks
   * The hour at which the next scan task runs.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  runHour?: number;
  /**
   * @remarks
   * The minute at which the next scan task runs.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  runMinute?: number;
  /**
   * @remarks
   * The matching rule for the scan scope of the custom scan task. This parameter takes effect only when you configure the **ScanRangeContent** parameter. Valid values:
   * 
   * - **0**: full match.
   * 
   * - **1**: prefix match.
   * 
   * - **2**: suffix match.
   * 
   * - **3**: regular expression match.
   * 
   * This parameter is required.
   * 
   * @example
   * 0
   */
  scanRange?: number;
  /**
   * @remarks
   * The content to match for the scan of structured data assets. This parameter is used with the ScanRange parameter.
   * 
   * > If you set ScanRange to 0, the scan matches the exact value of this parameter. If you set ScanRange to 1, the scan matches items that have the prefix specified by this parameter. For example, if you set this parameter to \\`test/abc\\`, file paths that start with \\`test/abc\\` are matched. If you set ScanRange to 2, the scan matches items that have the suffix specified by this parameter. If you set ScanRange to 3, the scan matches items that match the regular expression specified by this parameter.
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
   * 106.11.XX.XX
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
   * The account that creates the scan task.
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

