// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsRequest extends $dara.Model {
  /**
   * @example
   * vxc2341gfssad12
   */
  nextToken?: string;
  /**
   * @example
   * asc
   */
  orderBy?: string;
  /**
   * @example
   * 66c0c9fffeb86b450c199fcd
   */
  organizationId?: string;
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
   * id
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      organizationId: 'organizationId',
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

