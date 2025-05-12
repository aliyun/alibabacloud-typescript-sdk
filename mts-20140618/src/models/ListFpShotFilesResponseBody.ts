// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListFpShotFilesResponseBodyFpShotFileList } from "./ListFpShotFilesResponseBodyFpShotFileList";


export class ListFpShotFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The media fingerprint files. For more information, see the "FpShotFile" section of the [Data types](https://help.aliyun.com/document_detail/29251.html) topic.
   */
  fpShotFileList?: ListFpShotFilesResponseBodyFpShotFileList;
  /**
   * @remarks
   * The returned value of NextPageToken is a pagination token, which can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * ae0fd49c0840e14daf0d66a75b83****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A13-BEF6-D7393642CA58
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fpShotFileList: 'FpShotFileList',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpShotFileList: ListFpShotFilesResponseBodyFpShotFileList,
      nextPageToken: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.fpShotFileList && typeof (this.fpShotFileList as any).validate === 'function') {
      (this.fpShotFileList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

