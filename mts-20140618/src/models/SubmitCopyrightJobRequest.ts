// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightJobRequest extends $dara.Model {
  /**
   * @example
   * http://example.com/callback
   */
  callBack?: string;
  description?: string;
  /**
   * @example
   * {"Bucket":"example-bucket","Location":"oss-cn-shanghai","Object":"example.mp4"}
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
   */
  message?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {"Bucket":"example-bucket","Location":"oss-cn-shanghai","Object":"example_result.mp4"}
   */
  output?: string;
  /**
   * @example
   * {"algoType":"v2"}
   */
  params?: string;
  /**
   * @example
   * 0
   */
  startTime?: string;
  /**
   * @example
   * 10
   */
  totalTime?: string;
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
      description: 'Description',
      input: 'Input',
      level: 'Level',
      message: 'Message',
      output: 'Output',
      params: 'Params',
      startTime: 'StartTime',
      totalTime: 'TotalTime',
      url: 'Url',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callBack: 'string',
      description: 'string',
      input: 'string',
      level: 'number',
      message: 'string',
      output: 'string',
      params: 'string',
      startTime: 'string',
      totalTime: 'string',
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

