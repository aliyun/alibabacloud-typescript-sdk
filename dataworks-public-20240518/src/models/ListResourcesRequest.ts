// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the file resource. Fuzzy match is supported.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The ID of the owner, which is the UID of the workspace administrator account. You can log on to the Alibaba Cloud Management Console and view the account UID in the Security Management section of Account Management.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace configuration page to obtain the workspace ID. This parameter specifies the DataWorks workspace for the API operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 10002
   */
  projectId?: number;
  /**
   * @remarks
   * The filter condition for the resource type. Valid values:
   * 
   * - Python
   * - Jar
   * - Archive
   * - File
   * 
   * @example
   * Python
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

