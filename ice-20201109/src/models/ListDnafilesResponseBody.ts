// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDNAFilesResponseBodyFileList } from "./ListDnafilesResponseBodyFileList";


export class ListDNAFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried files.
   */
  fileList?: ListDNAFilesResponseBodyFileList[];
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * ae0fd49c0840e14daf0d66a75b83****
   */
  nextPageToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2AE89FA5-E620-56C7-9B80-75D09757385A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      fileList: 'FileList',
      nextPageToken: 'NextPageToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileList: { 'type': 'array', 'itemType': ListDNAFilesResponseBodyFileList },
      nextPageToken: 'string',
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

