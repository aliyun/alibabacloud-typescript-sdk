// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo } from "./AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo";


export class AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoList extends $dara.Model {
  /**
   * @remarks
   * The basic information of the file, including the duration and size.
   */
  fileBasicInfo?: AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoListFileBasicInfo,
    };
  }

  validate() {
    if(this.fileBasicInfo && typeof (this.fileBasicInfo as any).validate === 'function') {
      (this.fileBasicInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

