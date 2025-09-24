// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeaturesRequest extends $dara.Model {
  /**
   * @example
   * PaiConsole:IntegrateWithWorkspace
   */
  names?: string;
  static names(): { [key: string]: string } {
    return {
      names: 'Names',
    };
  }

  static types(): { [key: string]: any } {
    return {
      names: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

