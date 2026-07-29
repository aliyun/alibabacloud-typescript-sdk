// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * The policy name.
   * 
   * @example
   * test**
   */
  name?: string;
  /**
   * @remarks
   * Settings the page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Default value: **10**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The applicable product type. Valid values:
   * 
   * @example
   * ecs
   */
  productType?: string;
  /**
   * @remarks
   * The policy type. Valid values:
   * 
   * @example
   * l3
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      productType: 'ProductType',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      pageNo: 'number',
      pageSize: 'number',
      productType: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

