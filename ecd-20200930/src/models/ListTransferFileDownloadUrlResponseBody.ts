// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTransferFileDownloadUrlResponseBodyUrls extends $dara.Model {
  /**
   * @example
   * trf-i4pz8emx2k2fr****
   */
  fileId?: string;
  /**
   * @example
   * document.txt
   */
  fileName?: string;
  /**
   * @example
   * DELETED
   */
  status?: string;
  /**
   * @example
   * http://xxsy-transfer.oss-cn-beijing.aliyuncs.com/xxxx
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileName: 'FileName',
      status: 'Status',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'string',
      fileName: 'string',
      status: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTransferFileDownloadUrlResponseBody extends $dara.Model {
  /**
   * @example
   * F1F01499-8F3D-5657-91AD-48177EB****
   */
  requestId?: string;
  urls?: ListTransferFileDownloadUrlResponseBodyUrls[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      urls: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      urls: { 'type': 'array', 'itemType': ListTransferFileDownloadUrlResponseBodyUrls },
    };
  }

  validate() {
    if(Array.isArray(this.urls)) {
      $dara.Model.validateArray(this.urls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

