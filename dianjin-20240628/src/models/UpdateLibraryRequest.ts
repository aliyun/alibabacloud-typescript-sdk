// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateLibraryRequestIndexSetting } from "./UpdateLibraryRequestIndexSetting";


export class UpdateLibraryRequest extends $dara.Model {
  description?: string;
  indexSetting?: UpdateLibraryRequestIndexSetting;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dsfbashdbb
   */
  libraryId?: string;
  libraryName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      indexSetting: 'indexSetting',
      libraryId: 'libraryId',
      libraryName: 'libraryName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      indexSetting: UpdateLibraryRequestIndexSetting,
      libraryId: 'string',
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

