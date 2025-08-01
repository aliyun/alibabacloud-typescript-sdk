// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InitialSysomRequest extends $dara.Model {
  checkOnly?: boolean;
  source?: string;
  static names(): { [key: string]: string } {
    return {
      checkOnly: 'check_only',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkOnly: 'boolean',
      source: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

