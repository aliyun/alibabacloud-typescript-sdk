// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectModifyRecordsShrinkRequest extends $dara.Model {
  databasesShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * np_fe****
   */
  id?: string;
  transferMappingShrink?: string;
  static names(): { [key: string]: string } {
    return {
      databasesShrink: 'Databases',
      id: 'Id',
      transferMappingShrink: 'TransferMapping',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databasesShrink: 'string',
      id: 'string',
      transferMappingShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

