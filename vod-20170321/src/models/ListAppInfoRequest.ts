// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAppInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: **10**. Maximum value: **100**.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The resource group ID to which the instance belongs.
   * 
   * @example
   * rg-aekzko7fsuj****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The status of the application. You can specify the status of the applications that you want to query. After an application is created, it enters the **Normal** state. Valid values:
   * 
   * *   **Normal**
   * *   **Disable**
   * 
   * @example
   * Normal
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      resourceGroupId: 'ResourceGroupId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      resourceGroupId: 'string',
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

