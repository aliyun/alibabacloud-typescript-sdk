// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppsRequest extends $dara.Model {
  /**
   * @remarks
   * The application ID. You can create and query application IDs in the console. Only a single ID is supported. If this parameter is left empty, all application IDs are queried.
   * 
   * @example
   * yourAppId
   */
  appId?: string;
  /**
   * @remarks
   * The application version.
   * 
   * @example
   * 3.0
   */
  appVersion?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **asc**: Ascending.
   *  
   * - **desc**: Descending. Default value.
   * 
   * @example
   * asc
   */
  order?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**.
   * 
   * @example
   * 2
   */
  pageSize?: number;
  /**
   * @remarks
   * The application status. If this parameter is left empty, all statuses are queried. Valid values:
   * - **1**: Available.
   * 
   * - **2**: Disabled.
   * 
   * - **3**: Disabled due to overdue payments.
   * 
   * @example
   * 1
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appVersion: 'AppVersion',
      order: 'Order',
      ownerId: 'OwnerId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appVersion: 'string',
      order: 'string',
      ownerId: 'number',
      pageNum: 'number',
      pageSize: 'number',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

