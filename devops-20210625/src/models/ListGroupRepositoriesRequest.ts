// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListGroupRepositoriesRequest extends $dara.Model {
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
   * 60ee8a814690c27532d412f8
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
   * Demo
   */
  search?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      organizationId: 'organizationId',
      page: 'page',
      pageSize: 'pageSize',
      search: 'search',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
      search: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

