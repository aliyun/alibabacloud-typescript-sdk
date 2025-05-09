// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account used by the workspace administrator. You can log on to the Alibaba Cloud Management Console and view the ID on the Security Settings page.
   * 
   * @example
   * 110755000425XXXX
   */
  owner?: string;
  /**
   * @remarks
   * The page number.
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
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure this parameter to specify the DataWorks workspace to which the API operation is applied.
   * 
   * This parameter is required.
   * 
   * @example
   * 10002
   */
  projectId?: number;
  /**
   * @remarks
   * The resource type. This parameter specifies a filter condition.
   * 
   * Valid values:
   * 
   * *   Python
   * *   Jar
   * *   Archive
   * *   File
   * 
   * @example
   * python
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

