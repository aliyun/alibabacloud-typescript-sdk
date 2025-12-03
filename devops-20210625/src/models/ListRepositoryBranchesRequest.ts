// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryBranchesRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
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
   * 20
   */
  pageSize?: number;
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
      organizationId: 'organizationId',
      page: 'page',
      pageSize: 'pageSize',
      search: 'search',
      sort: 'sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
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

