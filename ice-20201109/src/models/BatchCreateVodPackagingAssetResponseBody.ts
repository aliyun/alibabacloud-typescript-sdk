// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BatchCreateVodPackagingAssetResponseBodyResultList } from "./BatchCreateVodPackagingAssetResponseBodyResultList";


export class BatchCreateVodPackagingAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the packaging group.
   * 
   * @example
   * vod_hls
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * The results of asset ingestion.
   */
  resultList?: BatchCreateVodPackagingAssetResponseBodyResultList[];
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      requestId: 'RequestId',
      resultList: 'ResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      requestId: 'string',
      resultList: { 'type': 'array', 'itemType': BatchCreateVodPackagingAssetResponseBodyResultList },
    };
  }

  validate() {
    if(Array.isArray(this.resultList)) {
      $dara.Model.validateArray(this.resultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

