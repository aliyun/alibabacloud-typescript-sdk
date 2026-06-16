// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCodeInterpreterOut extends $dara.Model {
  /**
   * @remarks
   * ID of the code interpreter.
   */
  codeInterpreterId?: string;
  /**
   * @remarks
   * Name of the code interpreter.
   */
  codeInterpreterName?: string;
  /**
   * @remarks
   * Status of the code interpreter.
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      codeInterpreterId: 'codeInterpreterId',
      codeInterpreterName: 'codeInterpreterName',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeInterpreterId: 'string',
      codeInterpreterName: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

