// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetaData extends $dara.Model {
  /**
   * @example
   * detection
   */
  identifier?: string;
  /**
   * @example
   * imm
   */
  provider?: string;
  /**
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      identifier: 'Identifier',
      provider: 'Provider',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      identifier: 'string',
      provider: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

