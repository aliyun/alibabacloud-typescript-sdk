// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChangeRequestsShrinkRequest extends $dara.Model {
  appNameListShrink?: string;
  /**
   * @example
   * change1
   */
  displayNameKeyword?: string;
  /**
   * @example
   * 4dc150725770510122396e2476
   */
  nextToken?: string;
  /**
   * @example
   * id
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 66c0c9fffeb86b450c199fcd
   */
  organizationId?: string;
  ownerIdListShrink?: string;
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
  stateListShrink?: string;
  static names(): { [key: string]: string } {
    return {
      appNameListShrink: 'appNameList',
      displayNameKeyword: 'displayNameKeyword',
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      organizationId: 'organizationId',
      ownerIdListShrink: 'ownerIdList',
      page: 'page',
      pagination: 'pagination',
      perPage: 'perPage',
      sort: 'sort',
      stateListShrink: 'stateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appNameListShrink: 'string',
      displayNameKeyword: 'string',
      nextToken: 'string',
      orderBy: 'string',
      organizationId: 'string',
      ownerIdListShrink: 'string',
      page: 'number',
      pagination: 'string',
      perPage: 'number',
      sort: 'string',
      stateListShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

