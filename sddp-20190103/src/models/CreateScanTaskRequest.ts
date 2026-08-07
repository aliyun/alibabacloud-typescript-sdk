// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateScanTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the data asset such as an instance, database, or bucket. You can call [DescribeDataLimits](~~DescribeDataLimits~~) to obtain the ID.
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
   * The interval in days between two consecutive custom scan tasks. Valid values: 1 to 2147483648.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  intervalDay?: number;
  /**
   * @remarks
   * The language of the request and response. Valid values:
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
   * The scan scope for OSS assets. Prefix match, suffix match, and regular expression match are supported.
   * 
   * @example
   * /test/test
   */
  ossScanPath?: string;
  /**
   * @remarks
   * The resource type of the product to query. Valid values:
   * - **1**: MaxCompute.
   * - **2**: OSS.
   * - **3**: ADS.
   * - **4**: OTS.
   * - **5**: RDS.
   * - **6**: SELF_DB.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  resourceType?: number;
  /**
   * @remarks
   * The runtime of the next scan task. Unit: hours.
   * 
   * This parameter is required.
   * 
   * @example
   * 12
   */
  runHour?: number;
  /**
   * @remarks
   * The runtime of the next scan task. Unit: minutes.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  runMinute?: number;
  /**
   * @remarks
   * The scan scope matching rule for the custom scan task. This parameter takes effect only when used together with **ScanRangeContent**. Valid values:
   * - **0**: full match.
   * - **1**: prefix match.
   * - **2**: suffix match.
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
   * The content to match within the scan scope of structured data assets by using prefix match, suffix match, or regular expression match.
   * 
   * > When ScanRange is set to 0, all content in this field is fully matched. When ScanRange is set to 1, the content in this field is matched by prefix. For example, if this field is set to test/abc, file paths that start with test/abc are matched. When ScanRange is set to 2, the content in this field is matched by suffix. When ScanRange is set to 3, the content in this field is matched by regular expression.
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

