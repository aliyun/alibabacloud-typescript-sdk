// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppsRequest extends $dara.Model {
  /**
   * @example
   * es-severless-test-app
   */
  appName?: string;
  /**
   * @example
   * 2023-08-29T02:37:22Z
   */
  createTime?: string;
  /**
   * @example
   * metrics-logs-online
   */
  description?: string;
  /**
   * @example
   * desc
   */
  orderType?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * ACTIVE
   */
  status?: string;
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      appName: 'appName',
      createTime: 'createTime',
      description: 'description',
      orderType: 'orderType',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      status: 'status',
      tags: 'tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appName: 'string',
      createTime: 'string',
      description: 'string',
      orderType: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      status: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

