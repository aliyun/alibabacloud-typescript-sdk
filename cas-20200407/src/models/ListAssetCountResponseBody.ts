// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetCountResponseBodyAssetCountList extends $dara.Model {
  /**
   * @example
   * 99
   */
  aliyunAssetCount?: number;
  /**
   * @example
   * 99
   */
  certificateCount?: number;
  /**
   * @example
   * 1767680115423
   */
  countDate?: number;
  /**
   * @example
   * 99
   */
  domainAssetCount?: number;
  /**
   * @example
   * 99
   */
  multiCloudAssetCount?: number;
  /**
   * @example
   * 99
   */
  points?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunAssetCount: 'AliyunAssetCount',
      certificateCount: 'CertificateCount',
      countDate: 'CountDate',
      domainAssetCount: 'DomainAssetCount',
      multiCloudAssetCount: 'MultiCloudAssetCount',
      points: 'Points',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunAssetCount: 'number',
      certificateCount: 'number',
      countDate: 'number',
      domainAssetCount: 'number',
      multiCloudAssetCount: 'number',
      points: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetCountResponseBody extends $dara.Model {
  assetCountList?: ListAssetCountResponseBodyAssetCountList[];
  /**
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @example
   * 12
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      assetCountList: 'AssetCountList',
      currentPage: 'CurrentPage',
      requestId: 'RequestId',
      showSize: 'ShowSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assetCountList: { 'type': 'array', 'itemType': ListAssetCountResponseBodyAssetCountList },
      currentPage: 'number',
      requestId: 'string',
      showSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.assetCountList)) {
      $dara.Model.validateArray(this.assetCountList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

