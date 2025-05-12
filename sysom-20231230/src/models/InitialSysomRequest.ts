// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitialSysomRequest extends $dara.Model {
  checkOnly?: boolean;
  static names(): { [key: string]: string } {
    return {
      checkOnly: 'check_only',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkOnly: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

