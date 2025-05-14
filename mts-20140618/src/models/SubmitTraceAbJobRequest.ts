// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceAbJobRequest extends $dara.Model {
  /**
   * @example
   * http://example.com/callback
   */
  callBack?: string;
  /**
   * @example
   * Qh6OdgIMcliQSI1fReOw****
   */
  cipherBase64ed?: string;
  /**
   * @example
   * {"Bucket":"ivison-test","Location":"oss-cn-shanghai","Object":"test.mp4"}
   */
  input?: string;
  /**
   * @example
   * 2
   */
  level?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Bucket":"ivison-test","Location":"oss-cn-shanghai","Dir":"out/"}
   */
  output?: string;
  /**
   * @example
   * 0
   */
  startTime?: number;
  /**
   * @example
   * 360
   */
  totalTime?: number;
  /**
   * @example
   * http://www.example.com/video/test.mp4
   */
  url?: string;
  /**
   * @example
   * 123
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      callBack: 'CallBack',
      cipherBase64ed: 'CipherBase64ed',
      input: 'Input',
      level: 'Level',
      output: 'Output',
      startTime: 'StartTime',
      totalTime: 'TotalTime',
      url: 'Url',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callBack: 'string',
      cipherBase64ed: 'string',
      input: 'string',
      level: 'number',
      output: 'string',
      startTime: 'number',
      totalTime: 'number',
      url: 'string',
      userData: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

