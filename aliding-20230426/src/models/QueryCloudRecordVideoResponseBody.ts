// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryCloudRecordVideoResponseBodyVideoList } from "./QueryCloudRecordVideoResponseBodyVideoList";


export class QueryCloudRecordVideoResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  videoList?: QueryCloudRecordVideoResponseBodyVideoList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      videoList: 'videoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      videoList: { 'type': 'array', 'itemType': QueryCloudRecordVideoResponseBodyVideoList },
    };
  }

  validate() {
    if(Array.isArray(this.videoList)) {
      $dara.Model.validateArray(this.videoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

