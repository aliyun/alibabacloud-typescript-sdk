// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMFAAuthenticationSettingInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the directory.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
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

