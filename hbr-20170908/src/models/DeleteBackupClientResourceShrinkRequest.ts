// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBackupClientResourceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * A list of client IDs. The list can contain up to 100 client IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * ["c-*********************"]
   */
  clientIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      clientIdsShrink: 'ClientIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

