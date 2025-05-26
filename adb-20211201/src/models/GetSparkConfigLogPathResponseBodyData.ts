// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkConfigLogPathResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The default log path.
   * 
   * @example
   * oss://aliyun-oa-adb-spark-1111-oss-cn-hanghzou/spark-logs
   */
  defaultLogPath?: string;
  /**
   * @remarks
   * Indicates whether a log path exists.
   * 
   * @example
   * true
   */
  isLogPathExists?: boolean;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 1675654361000
   */
  modifiedTimestamp?: string;
  /**
   * @remarks
   * The account ID of the modifier.
   * 
   * @example
   * 10130223128xxx
   */
  modifiedUid?: string;
  /**
   * @remarks
   * The recorded log path.
   * 
   * @example
   * oss://test/spark-logs/
   */
  recordedLogPath?: string;
  static names(): { [key: string]: string } {
    return {
      defaultLogPath: 'DefaultLogPath',
      isLogPathExists: 'IsLogPathExists',
      modifiedTimestamp: 'ModifiedTimestamp',
      modifiedUid: 'ModifiedUid',
      recordedLogPath: 'RecordedLogPath',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultLogPath: 'string',
      isLogPathExists: 'boolean',
      modifiedTimestamp: 'string',
      modifiedUid: 'string',
      recordedLogPath: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

