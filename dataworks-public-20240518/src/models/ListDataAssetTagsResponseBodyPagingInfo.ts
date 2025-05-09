// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataAssetTagsResponseBodyPagingInfoDataAssetTags } from "./ListDataAssetTagsResponseBodyPagingInfoDataAssetTags";


export class ListDataAssetTagsResponseBodyPagingInfo extends $dara.Model {
  /**
   * @remarks
   * The tags.
   */
  dataAssetTags?: ListDataAssetTagsResponseBodyPagingInfoDataAssetTags[];
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
   * 2524
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataAssetTags: 'DataAssetTags',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAssetTags: { 'type': 'array', 'itemType': ListDataAssetTagsResponseBodyPagingInfoDataAssetTags },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataAssetTags)) {
      $dara.Model.validateArray(this.dataAssetTags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

