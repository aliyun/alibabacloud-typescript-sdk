// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * The creator ID.
   * 
   * @example
   * 12103XXX46492139
   */
  creatorId?: string;
  /**
   * @remarks
   * The dataset ID.
   * 
   * This parameter is required.
   * 
   * @example
   * dataworks-dataset:3pXXXb8o0ngr07njhps1
   */
  datasetId?: string;
  /**
   * @remarks
   * The sort order. Default: Desc.
   * 
   * Valid values:
   * 
   * *   Asc: Ascending.
   * *   Desc: Descending.
   * 
   * @example
   * Desc
   */
  order?: string;
  /**
   * @remarks
   * The page number. Default: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default: 10. Maximum: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The sort field. Default: VersionNumber.
   * 
   * Valid values:
   * 
   * *   ModifyTime: Modification time.
   * *   CreateTime: Creation time.
   * *   VersionNumber: Version number.
   * 
   * @example
   * CreateTime
   */
  sortBy?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      datasetId: 'DatasetId',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      datasetId: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

