// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCodeInterpreterOut extends $dara.Model {
  codeInterpreterId?: string;
  codeInterpreterName?: string;
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

