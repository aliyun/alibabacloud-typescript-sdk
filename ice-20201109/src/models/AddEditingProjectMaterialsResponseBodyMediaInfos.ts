// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoList } from "./AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoList";
import { AddEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo } from "./AddEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo";


export class AddEditingProjectMaterialsResponseBodyMediaInfos extends $dara.Model {
  /**
   * @remarks
   * FileInfos
   */
  fileInfoList?: AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoList[];
  /**
   * @remarks
   * The basic information of the media assets.
   */
  mediaBasicInfo?: AddEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * *****5cb2e35433198daae94a72*****
   */
  mediaId?: string;
  static names(): { [key: string]: string } {
    return {
      fileInfoList: 'FileInfoList',
      mediaBasicInfo: 'MediaBasicInfo',
      mediaId: 'MediaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileInfoList: { 'type': 'array', 'itemType': AddEditingProjectMaterialsResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: AddEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo,
      mediaId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileInfoList)) {
      $dara.Model.validateArray(this.fileInfoList);
    }
    if(this.mediaBasicInfo && typeof (this.mediaBasicInfo as any).validate === 'function') {
      (this.mediaBasicInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

