// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLibraryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * skdfefxxx
   */
  libraryId?: string;
  static names(): { [key: string]: string } {
    return {
      libraryId: 'libraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libraryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

