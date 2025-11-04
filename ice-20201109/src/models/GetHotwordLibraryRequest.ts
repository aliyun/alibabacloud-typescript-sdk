// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotwordLibraryRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the hotword library.
   * 
   * This parameter is required.
   * 
   * @example
   * ****96e8864746a0b6f3****
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

