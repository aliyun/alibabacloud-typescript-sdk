// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateQaLibraryResponseBodyData extends $dara.Model {
  /**
   * @example
   * 6jh378d
   */
  qaLibraryId?: string;
  static names(): { [key: string]: string } {
    return {
      qaLibraryId: 'qaLibraryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qaLibraryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

