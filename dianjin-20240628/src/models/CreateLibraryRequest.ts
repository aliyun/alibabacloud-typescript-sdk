// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateLibraryRequestIndexSetting } from "./CreateLibraryRequestIndexSetting";


export class CreateLibraryRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  description?: string;
  indexSetting?: CreateLibraryRequestIndexSetting;
  /**
   * @remarks
   * This parameter is required.
   */
  libraryName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      indexSetting: 'indexSetting',
      libraryName: 'libraryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      indexSetting: CreateLibraryRequestIndexSetting,
      libraryName: 'string',
    };
  }

  validate() {
    if(this.indexSetting && typeof (this.indexSetting as any).validate === 'function') {
      (this.indexSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

