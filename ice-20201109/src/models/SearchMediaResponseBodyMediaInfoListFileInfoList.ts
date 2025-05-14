// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SearchMediaResponseBodyMediaInfoListFileInfoListFileBasicInfo } from "./SearchMediaResponseBodyMediaInfoListFileInfoListFileBasicInfo";


export class SearchMediaResponseBodyMediaInfoListFileInfoList extends $dara.Model {
  /**
   * @remarks
   * The basic information about the file, such as the duration and size.
   */
  fileBasicInfo?: SearchMediaResponseBodyMediaInfoListFileInfoListFileBasicInfo;
  static names(): { [key: string]: string } {
    return {
      fileBasicInfo: 'FileBasicInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileBasicInfo: SearchMediaResponseBodyMediaInfoListFileInfoListFileBasicInfo,
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

