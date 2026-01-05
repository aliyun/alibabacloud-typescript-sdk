// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListComponentsRequest extends $dara.Model {
  /**
   * @example
   * cmpt-my1tk3jggooi5uwks5,cmpt-n69468yvjz8d12as7d,cmpt-tga4omjrepklkg1onn
   */
  componentIds?: string;
  /**
   * @example
   * dataset-accelerator
   */
  name?: string;
  /**
   * @example
   * Desc
   */
  order?: string;
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
   * GmtCreateTime
   */
  sortBy?: string;
  /**
   * @example
   * v1.0.0
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      componentIds: 'ComponentIds',
      name: 'Name',
      order: 'Order',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      sortBy: 'SortBy',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentIds: 'string',
      name: 'string',
      order: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      sortBy: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

