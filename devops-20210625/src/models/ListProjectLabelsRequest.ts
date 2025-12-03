// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProjectLabelsRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @example
   * label_name
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 5ebbc0228123212b59xxxxx
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
   * @remarks
   * This parameter is required.
   */
  repositoryIdentity?: string;
  /**
   * @example
   * TEST
   */
  search?: string;
  /**
   * @example
   * desc
   */
  sort?: string;
  /**
   * @example
   * false
   */
  withCounts?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      orderBy: 'orderBy',
      organizationId: 'organizationId',
      page: 'page',
      pageSize: 'pageSize',
      repositoryIdentity: 'repositoryIdentity',
      search: 'search',
      sort: 'sort',
      withCounts: 'withCounts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      orderBy: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      repositoryIdentity: 'string',
      search: 'string',
      sort: 'string',
      withCounts: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

