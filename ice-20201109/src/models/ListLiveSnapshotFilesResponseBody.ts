// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListLiveSnapshotFilesResponseBodyFileList } from "./ListLiveSnapshotFilesResponseBodyFileList";


export class ListLiveSnapshotFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of files.
   */
  fileList?: ListLiveSnapshotFilesResponseBodyFileList[];
  /**
   * @remarks
   * The start time of the next page. If no value is returned, the pagination ends.
   * 
   * @example
   * 2022-02-02T22:22:22Z
   */
  nextStartTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileList: 'FileList',
      nextStartTime: 'NextStartTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileList: { 'type': 'array', 'itemType': ListLiveSnapshotFilesResponseBodyFileList },
      nextStartTime: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.fileList)) {
      $dara.Model.validateArray(this.fileList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

