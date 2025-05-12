// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitImageCopyrightRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  message?: string;
  /**
   * @example
   * {"Bucket":"abc-test","Location":"oss-cn-shanghai","Object":"out.jpeg"}
   */
  output?: string;
  /**
   * @example
   * {"width":2999, "height":2999, "afa": 3, "type":1, "version":0}
   */
  params?: string;
  static names(): { [key: string]: string } {
    return {
      message: 'Message',
      output: 'Output',
      params: 'Params',
    };
  }

  static types(): { [key: string]: any } {
    return {
      message: 'string',
      output: 'string',
      params: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

