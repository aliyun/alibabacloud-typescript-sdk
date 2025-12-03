// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRepositoriesRequest extends $dara.Model {
  accessToken?: string;
  /**
   * @example
   * false
   */
  archived?: boolean;
  minAccessLevel?: number;
  /**
   * @example
   * created_at
   */
  orderBy?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  organizationId?: string;
  /**
   * @example
   * 2
   */
  page?: number;
  /**
   * @example
   * 20
   */
  perPage?: number;
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
      archived: 'archived',
      minAccessLevel: 'minAccessLevel',
      orderBy: 'orderBy',
      organizationId: 'organizationId',
      page: 'page',
      perPage: 'perPage',
      search: 'search',
      sort: 'sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      archived: 'boolean',
      minAccessLevel: 'number',
      orderBy: 'string',
      organizationId: 'string',
      page: 'number',
      perPage: 'number',
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

