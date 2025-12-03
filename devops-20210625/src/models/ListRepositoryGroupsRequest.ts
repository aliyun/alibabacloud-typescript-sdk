// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryGroupsRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @example
   * false
   */
  includePersonal?: boolean;
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 26842
   */
  parentId?: number;
  /**
   * @example
   * Demo
   */
  search?: string;
  /**
   * @example
   * desc
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      includePersonal: 'includePersonal',
      orderBy: 'orderBy',
      organizationId: 'organizationId',
      page: 'page',
      pageSize: 'pageSize',
      parentId: 'parentId',
      search: 'search',
      sort: 'sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      includePersonal: 'boolean',
      orderBy: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      parentId: 'number',
      search: 'string',
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

