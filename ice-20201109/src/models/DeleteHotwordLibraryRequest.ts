// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteHotwordLibraryRequest extends $dara.Model {
  /**
   * @example
   * ****cdb3e74639973036bc84****
   */
  hotwordLibraryId?: string;
  static names(): { [key: string]: string } {
    return {
      hotwordLibraryId: 'HotwordLibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hotwordLibraryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

