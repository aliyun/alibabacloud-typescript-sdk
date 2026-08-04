// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnterpriseAcceleratePoliciesRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return for a paged query. Valid values: 1 to 10000.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The name of the enterprise acceleration policy.
   * 
   * @example
   * 测试策略
   */
  name?: string;
  /**
   * @remarks
   * The number of entries to return on each page for a paged query. Valid values: 1 to 1000.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      name: 'Name',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      name: 'string',
      pageSize: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

