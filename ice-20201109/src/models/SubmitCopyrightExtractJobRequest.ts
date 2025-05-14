// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitCopyrightExtractJobRequestInput } from "./SubmitCopyrightExtractJobRequestInput";


export class SubmitCopyrightExtractJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  input?: SubmitCopyrightExtractJobRequestInput;
  /**
   * @example
   * {"algoType":"v2"}
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
      input: SubmitCopyrightExtractJobRequestInput,
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

