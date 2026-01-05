// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTasksRequest extends $dara.Model {
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * pp-bp1ddg1n2a****
   */
  provisionedProductId?: string;
  /**
   * @example
   * CreateTime
   */
  sortBy?: string;
  /**
   * @example
   * Desc
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      provisionedProductId: 'ProvisionedProductId',
      sortBy: 'SortBy',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      provisionedProductId: 'string',
      sortBy: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

