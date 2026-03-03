// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRuntimeTokensRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  enterpriseId?: number;
  /**
   * @example
   * gmtCreated
   */
  orderBy?: string;
  /**
   * @example
   * desc
   */
  orderDirection?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 1
   */
  pbcId?: number;
  /**
   * @example
   * 1
   */
  serviceGroupId?: number;
  static names(): { [key: string]: string } {
    return {
      enterpriseId: 'enterpriseId',
      orderBy: 'orderBy',
      orderDirection: 'orderDirection',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pbcId: 'pbcId',
      serviceGroupId: 'serviceGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enterpriseId: 'number',
      orderBy: 'string',
      orderDirection: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      pbcId: 'number',
      serviceGroupId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

