// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDatasetItemListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the dataset.
   * 
   * This parameter is required.
   * 
   * @example
   * 602e1f6b3543200eaab0a89e********
   */
  datasetId?: string;
  /**
   * @remarks
   * The ID of the data entry. You can enter multiple IDs. Separate them with commas (,).
   * 
   * @example
   * 5045****
   */
  datasetItemIds?: string;
  /**
   * @remarks
   * The number of the page to return. Pages start from page 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      datasetId: 'DatasetId',
      datasetItemIds: 'DatasetItemIds',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasetId: 'string',
      datasetItemIds: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

