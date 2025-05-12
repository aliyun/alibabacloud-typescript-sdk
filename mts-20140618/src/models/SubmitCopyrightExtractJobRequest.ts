// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitCopyrightExtractJobRequest extends $dara.Model {
  /**
   * @example
   * http://example.com/callback
   */
  callBack?: string;
  /**
   * @example
   * {"Bucket":"example","Location":"oss-cn-shanghai","Object":"example.mp4"}
   */
  input?: string;
  /**
   * @example
   * {"algoType":"v1"}
   */
  params?: string;
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
      input: 'Input',
      params: 'Params',
      url: 'Url',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callBack: 'string',
      input: 'string',
      params: 'string',
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

