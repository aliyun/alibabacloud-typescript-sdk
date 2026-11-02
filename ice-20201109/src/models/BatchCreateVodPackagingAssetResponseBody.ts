// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { VodPackagingAsset } from "./VodPackagingAsset";


export class BatchCreateVodPackagingAssetResponseBodyResultList extends $dara.Model {
  /**
   * @remarks
   * The information about the successfully created asset.
   */
  asset?: VodPackagingAsset;
  /**
   * @remarks
   * The error code for the creation failure.
   * 
   * @example
   * InvalidParameter.PackagingAssetAlreadyExists
   */
  code?: string;
  /**
   * @remarks
   * The detailed information about the creation failure.
   * 
   * @example
   * The specified packagingAsset "inputMovie" already exists
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      asset: 'Asset',
      code: 'Code',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      asset: VodPackagingAsset,
      code: 'string',
      message: 'string',
    };
  }

  validate() {
    if(this.asset && typeof (this.asset as any).validate === 'function') {
      (this.asset as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BatchCreateVodPackagingAssetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the VOD packaging group.
   * 
   * @example
   * vod_hls
   */
  groupName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ******3B-0E1A-586A-AC29-742247******
   */
  requestId?: string;
  /**
   * @remarks
   * The list of creation results.
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

