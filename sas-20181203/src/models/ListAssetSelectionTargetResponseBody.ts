// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetSelectionTargetResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the asset.
   * 
   * @example
   * 30****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the asset.
   * 
   * @example
   * test****
   */
  targetName?: string;
  static names(): { [key: string]: string } {
    return {
      targetId: 'TargetId',
      targetName: 'TargetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetId: 'string',
      targetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetSelectionTargetResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 639
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetSelectionTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListAssetSelectionTargetResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListAssetSelectionTargetResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 50A75355-F58F-5D65-8377-98C88DED9C51
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListAssetSelectionTargetResponseBodyData },
      pageInfo: ListAssetSelectionTargetResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

