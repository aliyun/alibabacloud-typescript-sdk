// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoryCommitsRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @example
   * 2022-08-18 08:00:00
   */
  end?: string;
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
   * src/cpp/main.cpp
   */
  path?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  refName?: string;
  /**
   * @example
   * search
   */
  search?: string;
  /**
   * @example
   * false
   */
  showCommentsCount?: boolean;
  /**
   * @example
   * false
   */
  showSignature?: boolean;
  /**
   * @example
   * 2022-03-18 08:00:00
   */
  start?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      end: 'end',
      organizationId: 'organizationId',
      page: 'page',
      pageSize: 'pageSize',
      path: 'path',
      refName: 'refName',
      search: 'search',
      showCommentsCount: 'showCommentsCount',
      showSignature: 'showSignature',
      start: 'start',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      end: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      path: 'string',
      refName: 'string',
      search: 'string',
      showCommentsCount: 'boolean',
      showSignature: 'boolean',
      start: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

