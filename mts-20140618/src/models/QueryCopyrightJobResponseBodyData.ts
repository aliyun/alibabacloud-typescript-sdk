// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryCopyrightJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * http://callbacktest.com/callback
   */
  callback?: string;
  /**
   * @example
   * 1627357322
   */
  gmtCreate?: number;
  /**
   * @example
   * 1627357328
   */
  gmtModified?: number;
  /**
   * @example
   * {"Bucket":"ivison-test","Location":"oss-cn-shanghai","Object":"gambling.mp4"}
   */
  input?: string;
  /**
   * @example
   * bfb786c639894f4d80648792021e****
   */
  jobId?: string;
  /**
   * @example
   * 2
   */
  level?: number;
  /**
   * @example
   * 平头哥半导体(上海)
   */
  message?: string;
  /**
   * @example
   * {"Bucket":"ivison-test","Location":"oss-cn-shanghai","Object":"out.mp4"}
   */
  output?: string;
  /**
   * @example
   * {"Code":"success","Message":"ok"}
   */
  result?: string;
  /**
   * @example
   * success
   */
  status?: string;
  /**
   * @example
   * 123
   */
  userData?: string;
  /**
   * @example
   * 1346693***
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      callback: 'Callback',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      input: 'Input',
      jobId: 'JobId',
      level: 'Level',
      message: 'Message',
      output: 'Output',
      result: 'Result',
      status: 'Status',
      userData: 'UserData',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callback: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      input: 'string',
      jobId: 'string',
      level: 'number',
      message: 'string',
      output: 'string',
      result: 'string',
      status: 'string',
      userData: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

