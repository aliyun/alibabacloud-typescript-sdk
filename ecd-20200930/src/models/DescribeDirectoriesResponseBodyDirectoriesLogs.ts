// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDirectoriesResponseBodyDirectoriesLogs extends $dara.Model {
  /**
   * @remarks
   * The level of the log entry.
   * 
   * Valid values:
   * 
   * *   ERROR
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   INFO
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   WARN
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * INFO
   */
  level?: string;
  /**
   * @remarks
   * Details of the log entry.
   * 
   * @example
   * code:success | message:Create Connector complete.
   */
  message?: string;
  /**
   * @remarks
   * The step that corresponds to the log entry.
   * 
   * @example
   * DescribeDirectories
   */
  step?: string;
  /**
   * @remarks
   * The time when the log entry was printed.
   * 
   * @example
   * 2021-01-22T06:45Z
   */
  timeStamp?: string;
  static names(): { [key: string]: string } {
    return {
      level: 'Level',
      message: 'Message',
      step: 'Step',
      timeStamp: 'TimeStamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      level: 'string',
      message: 'string',
      step: 'string',
      timeStamp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

