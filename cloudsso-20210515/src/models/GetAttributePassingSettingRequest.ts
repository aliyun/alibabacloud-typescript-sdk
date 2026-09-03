// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAttributePassingSettingRequest extends $dara.Model {
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-003qew84****
   */
  directoryId?: string;
  static names(): { [key: string]: string } {
    return {
      directoryId: 'DirectoryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      directoryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

