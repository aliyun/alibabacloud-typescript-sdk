// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMergeRequestsRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @example
   * 1234567890
   */
  authorIds?: string;
  createdAfter?: string;
  createdBefore?: string;
  /**
   * @example
   * new
   */
  filter?: string;
  /**
   * @example
   * 889910, 889911
   */
  groupIds?: string;
  labelIds?: string;
  /**
   * @example
   * updated_at
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60de7a6852743a5162b5f957
   */
  organizationId?: string;
  /**
   * @example
   * 1
   */
  page?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 2308912, 2308913
   */
  projectIds?: string;
  /**
   * @example
   * 1234567890123
   */
  reviewerIds?: string;
  /**
   * @example
   * test-search
   */
  search?: string;
  /**
   * @example
   * desc
   */
  sort?: string;
  /**
   * @example
   * opened
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      authorIds: 'authorIds',
      createdAfter: 'createdAfter',
      createdBefore: 'createdBefore',
      filter: 'filter',
      groupIds: 'groupIds',
      labelIds: 'labelIds',
      orderBy: 'orderBy',
      organizationId: 'organizationId',
      page: 'page',
      pageSize: 'pageSize',
      projectIds: 'projectIds',
      reviewerIds: 'reviewerIds',
      search: 'search',
      sort: 'sort',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      authorIds: 'string',
      createdAfter: 'string',
      createdBefore: 'string',
      filter: 'string',
      groupIds: 'string',
      labelIds: 'string',
      orderBy: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      projectIds: 'string',
      reviewerIds: 'string',
      search: 'string',
      sort: 'string',
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

