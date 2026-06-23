// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListNodeDependenciesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * >Notice: 
   * 
   * The data type of this parameter is Long in SDKs earlier than V8.0.0, and is String in SDKs of V8.0.0 and later versions. **The change does not affect the normal use of the SDKs. The parameter is still returned as the type defined in the SDKs.** When you upgrade an SDK to a version later than V8.0.0, a compilation error may occur due to the type change. In this case, you must manually change the data type.
   * 
   * This parameter is required.
   * 
   * @example
   * 860438872620113XXXX
   */
  id?: string;
  /**
   * @remarks
   * The number of the page to return. The value of this parameter must be a positive integer. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page. Default value: 10. Maximum value: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can go to the Workspace Management page in the [DataWorks console](https://workbench.data.aliyun.com/console) to obtain the workspace ID.
   * 
   * This parameter is used to specify the DataWorks workspace for the API call.
   * 
   * This parameter is required.
   * 
   * @example
   * 10001
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

