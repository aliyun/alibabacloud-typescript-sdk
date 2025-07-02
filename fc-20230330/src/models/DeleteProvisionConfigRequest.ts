// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProvisionConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The function alias.
   * 
   * @example
   * LATEST
   */
  qualifier?: string;
  static names(): { [key: string]: string } {
    return {
      qualifier: 'qualifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

