// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataAssetsResponseBodyPagingInfoDataAssets } from "./ListDataAssetsResponseBodyPagingInfoDataAssets";


export class ListDataAssetsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The data assets.
   */
  dataAssets?: ListDataAssetsResponseBodyPagingInfoDataAssets[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataAssets: 'DataAssets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAssets: { 'type': 'array', 'itemType': ListDataAssetsResponseBodyPagingInfoDataAssets },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataAssets)) {
      $dara.Model.validateArray(this.dataAssets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

