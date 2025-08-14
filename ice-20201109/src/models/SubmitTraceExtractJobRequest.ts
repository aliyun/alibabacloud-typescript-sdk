// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitTraceExtractJobRequestInput extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * oss://bucket/object
   */
  media?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * OSS
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      media: 'Media',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      media: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SubmitTraceExtractJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  input?: SubmitTraceExtractJobRequestInput;
  /**
   * @example
   * {"m3u8Type":"v1"}
   */
  params?: string;
  /**
   * @example
   * 123
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
      params: 'Params',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitTraceExtractJobRequestInput,
      params: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.input && typeof (this.input as any).validate === 'function') {
      (this.input as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

