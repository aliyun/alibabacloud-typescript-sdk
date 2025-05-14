// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SubmitPackageJobRequestInputsInput } from "./SubmitPackageJobRequestInputsInput";


export class SubmitPackageJobRequestInputs extends $dara.Model {
  /**
   * @remarks
   * The information about the input stream file.
   * 
   * This parameter is required.
   */
  input?: SubmitPackageJobRequestInputsInput;
  static names(): { [key: string]: string } {
    return {
      input: 'Input',
    };
  }

  static types(): { [key: string]: any } {
    return {
      input: SubmitPackageJobRequestInputsInput,
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

