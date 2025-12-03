// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListUserKeysRequest extends $dara.Model {
  /**
   * @example
   * f0b1e61db5961df5975a93f9129d2513
   */
  accessToken?: string;
  /**
   * @example
   * created_at
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
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * desc
   */
  sort?: string;
  static names(): { [key: string]: string } {
    return {
      accessToken: 'accessToken',
      orderBy: 'orderBy',
      organizationId: 'organizationId',
      page: 'page',
      pageSize: 'pageSize',
      sort: 'sort',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessToken: 'string',
      orderBy: 'string',
      organizationId: 'string',
      page: 'number',
      pageSize: 'number',
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

