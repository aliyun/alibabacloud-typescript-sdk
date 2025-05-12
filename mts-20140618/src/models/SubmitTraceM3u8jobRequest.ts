// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceM3u8JobRequest extends $dara.Model {
  /**
   * @example
   * https://cipher.abc.com
   */
  keyUri?: string;
  /**
   * @example
   * 437bd2b516ffda105d07b12a9a82****
   */
  mediaId?: string;
  /**
   * @example
   * {"Bucket":"exampleBucket","Location":"oss-cn-shanghai","Object":"out.m3u8"}
   */
  output?: string;
  /**
   * @example
   * {"m3u8Type":"v1"}
   */
  params?: string;
  trace?: string;
  static names(): { [key: string]: string } {
    return {
      keyUri: 'KeyUri',
      mediaId: 'MediaId',
      output: 'Output',
      params: 'Params',
      trace: 'Trace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyUri: 'string',
      mediaId: 'string',
      output: 'string',
      params: 'string',
      trace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

