// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTicketTemplatesRequest extends $dara.Model {
  /**
   * @example
   * 43c2671b-********86d0-6bd187905cc8
   */
  categoryId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  searchPattern?: string;
  /**
   * @example
   * Enabled
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      categoryId: 'CategoryId',
      instanceId: 'InstanceId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      searchPattern: 'SearchPattern',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryId: 'string',
      instanceId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      searchPattern: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

