// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsShrinkRequest extends $dara.Model {
  /**
   * @example
   * 12103XXX46492139
   */
  creatorId?: string;
  dataTypeListShrink?: string;
  /**
   * @example
   * test_dataset
   */
  name?: string;
  /**
   * @example
   * Asc
   */
  order?: string;
  /**
   * @example
   * DataWorks
   */
  origin?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 251363
   */
  projectId?: number;
  /**
   * @example
   * CreateTime
   */
  sortBy?: string;
  storageTypeListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      dataTypeListShrink: 'DataTypeList',
      name: 'Name',
      order: 'Order',
      origin: 'Origin',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      storageTypeListShrink: 'StorageTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      dataTypeListShrink: 'string',
      name: 'string',
      order: 'string',
      origin: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      storageTypeListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

