// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUrlUploadInfosResponseBodyURLUploadInfoList } from "./GetUrlUploadInfosResponseBodyUrluploadInfoList";


export class GetUrlUploadInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The job IDs or upload URLs that do not exist.
   */
  nonExists?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******11-DB8D-4A9A-875B-275798******
   */
  requestId?: string;
  /**
   * @remarks
   * The details about URL-based upload jobs.
   */
  URLUploadInfoList?: GetUrlUploadInfosResponseBodyURLUploadInfoList[];
  static names(): { [key: string]: string } {
    return {
      nonExists: 'NonExists',
      requestId: 'RequestId',
      URLUploadInfoList: 'URLUploadInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExists: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      URLUploadInfoList: { 'type': 'array', 'itemType': GetUrlUploadInfosResponseBodyURLUploadInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.nonExists)) {
      $dara.Model.validateArray(this.nonExists);
    }
    if(Array.isArray(this.URLUploadInfoList)) {
      $dara.Model.validateArray(this.URLUploadInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

