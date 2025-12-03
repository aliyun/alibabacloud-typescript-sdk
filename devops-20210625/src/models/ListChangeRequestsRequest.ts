// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListChangeRequestsRequest extends $dara.Model {
  appNameList?: string[];
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
  ownerIdList?: string[];
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
  stateList?: string[];
  static names(): { [key: string]: string } {
    return {
      appNameList: 'appNameList',
      displayNameKeyword: 'displayNameKeyword',
      nextToken: 'nextToken',
      orderBy: 'orderBy',
      organizationId: 'organizationId',
      ownerIdList: 'ownerIdList',
      page: 'page',
      pagination: 'pagination',
      perPage: 'perPage',
      sort: 'sort',
      stateList: 'stateList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appNameList: { 'type': 'array', 'itemType': 'string' },
      displayNameKeyword: 'string',
      nextToken: 'string',
      orderBy: 'string',
      organizationId: 'string',
      ownerIdList: { 'type': 'array', 'itemType': 'string' },
      page: 'number',
      pagination: 'string',
      perPage: 'number',
      sort: 'string',
      stateList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.appNameList)) {
      $dara.Model.validateArray(this.appNameList);
    }
    if(Array.isArray(this.ownerIdList)) {
      $dara.Model.validateArray(this.ownerIdList);
    }
    if(Array.isArray(this.stateList)) {
      $dara.Model.validateArray(this.stateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

