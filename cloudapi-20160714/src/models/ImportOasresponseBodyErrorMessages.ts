// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportOASResponseBodyErrorMessages extends $dara.Model {
  errorMessage?: string[];
  static names(): { [key: string]: string } {
    return {
      errorMessage: 'ErrorMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorMessage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.errorMessage)) {
      $dara.Model.validateArray(this.errorMessage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

