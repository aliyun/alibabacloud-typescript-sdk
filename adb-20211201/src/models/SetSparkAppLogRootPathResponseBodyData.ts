// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetSparkAppLogRootPathResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The default log path.
   * 
   * @example
   * oss://path/to/log
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
   * 1675236908
   */
  modifiedTimestamp?: string;
  /**
   * @remarks
   * The modifier ID.
   * 
   * @example
   * 1111111
   */
  modifiedUid?: string;
  /**
   * @remarks
   * The recorded log path.
   * 
   * @example
   * oss://path/to/log
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

