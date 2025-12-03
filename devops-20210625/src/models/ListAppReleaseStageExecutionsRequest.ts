// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppReleaseStageExecutionsRequest extends $dara.Model {
  /**
   * @example
   * ""
   */
  nextToken?: string;
  /**
   * @example
   * gmtCreate
   */
  orderBy?: string;
  /**
   * @example
   * 66c0c9fffeb86b450c199fcd
   */
  organizationId?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * keyset
   */
  pagination?: string;
  /**
   * @example
   * 20
   */
  perPage?: number;
  /**
   * @example
   * desc
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      organizationId: 'organizationId',
      page: 'page',
      pagination: 'pagination',
      perPage: 'perPage',
      sort: 'sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      orderBy: 'string',
      organizationId: 'string',
      page: 'number',
      pagination: 'string',
      perPage: 'number',
      sort: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

