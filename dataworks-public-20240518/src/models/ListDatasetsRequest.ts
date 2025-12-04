// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetsRequest extends $dara.Model {
  /**
   * @example
   * 12103XXX46492139
   */
  creatorId?: string;
  dataTypeList?: string[];
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
  storageTypeList?: string[];
  static names(): { [key: string]: string } {
    return {
      creatorId: 'CreatorId',
      dataTypeList: 'DataTypeList',
      name: 'Name',
      order: 'Order',
      origin: 'Origin',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortBy: 'SortBy',
      storageTypeList: 'StorageTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creatorId: 'string',
      dataTypeList: { 'type': 'array', 'itemType': 'string' },
      name: 'string',
      order: 'string',
      origin: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortBy: 'string',
      storageTypeList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dataTypeList)) {
      $dara.Model.validateArray(this.dataTypeList);
    }
    if(Array.isArray(this.storageTypeList)) {
      $dara.Model.validateArray(this.storageTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

