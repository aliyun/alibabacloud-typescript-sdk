// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoList } from "./GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoList";
import { GetEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo } from "./GetEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo";


export class GetEditingProjectMaterialsResponseBodyMediaInfos extends $dara.Model {
  /**
   * @remarks
   * The information about the file.
   */
  fileInfoList?: GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoList[];
  /**
   * @remarks
   * The basic information of the media asset.
   */
  mediaBasicInfo?: GetEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo;
  /**
   * @remarks
   * The ID of the media asset.
   * 
   * @example
   * *****64623a94eca8516569c8fe*****
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
      fileInfoList: { 'type': 'array', 'itemType': GetEditingProjectMaterialsResponseBodyMediaInfosFileInfoList },
      mediaBasicInfo: GetEditingProjectMaterialsResponseBodyMediaInfosMediaBasicInfo,
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

