// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMonitorContactsRequest extends $dara.Model {
  /**
   * @example
   * 4
   */
  enterpriseId?: number;
  /**
   * @example
   * 1445
   */
  groupId?: number;
  name?: string;
  /**
   * @example
   * id
   */
  orderBy?: string;
  /**
   * @example
   * DESC
   */
  orderDirection?: string;
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
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'enterpriseId',
      groupId: 'groupId',
      name: 'name',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      groupId: 'number',
      name: 'string',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'number',
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

