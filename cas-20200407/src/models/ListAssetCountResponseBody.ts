// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetCountResponseBodyAssetCountList extends $dara.Model {
  /**
   * @remarks
   * The total number of Alibaba Cloud resources.
   * 
   * @example
   * 99
   */
  aliyunAssetCount?: number;
  /**
   * @remarks
   * The total number of certificate resources.
   * 
   * @example
   * 99
   */
  certificateCount?: number;
  /**
   * @remarks
   * The statistics date. The value is a UNIX timestamp accurate to seconds.
   * 
   * @example
   * 1767680115423
   */
  countDate?: number;
  /**
   * @remarks
   * The total number of domain name resources.
   * 
   * @example
   * 99
   */
  domainAssetCount?: number;
  /**
   * @remarks
   * The total number of resources from other cloud providers.
   * 
   * @example
   * 99
   */
  multiCloudAssetCount?: number;
  /**
   * @remarks
   * The number of points.
   * 
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
  /**
   * @remarks
   * The resource statistics list.
   */
  assetCountList?: ListAssetCountResponseBodyAssetCountList[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each request. You can use the request ID to troubleshoot issues.
   * 
   * @example
   * CBF1E9B7-D6A0-4E9E-AD3E-2B47E6C2837D
   */
  requestId?: string;
  /**
   * @remarks
   * The number of entries displayed on each page for paging. This parameter is not returned if ShowSize is not specified in the request.
   * 
   * @example
   * 20
   */
  showSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
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

