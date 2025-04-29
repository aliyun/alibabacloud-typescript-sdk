// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImportOASResponseBodyWarningMessages extends $dara.Model {
  warningMessage?: string[];
  static names(): { [key: string]: string } {
    return {
      warningMessage: 'WarningMessage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warningMessage: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.warningMessage)) {
      $dara.Model.validateArray(this.warningMessage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

