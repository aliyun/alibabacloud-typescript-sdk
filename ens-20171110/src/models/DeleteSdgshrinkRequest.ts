// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSDGShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the SDGs that you want to delete.
   * 
   * This parameter is required.
   */
  SDGIdShrink?: string;
  static names(): { [key: string]: string } {
    return {
      SDGIdShrink: 'SDGId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      SDGIdShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

