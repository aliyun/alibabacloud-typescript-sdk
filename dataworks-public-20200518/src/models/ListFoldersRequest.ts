// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFoldersRequest extends $dara.Model {
  /**
   * @remarks
   * The number of the page to return. This parameter is used for pagination.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. The default value is 10. The maximum value is 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The path of the parent folder.
   * 
   * This parameter is required.
   * 
   * @example
   * Business_process/my_first_business_process/MaxCompute
   */
  parentFolderPath?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. Log on to the DataWorks console and go to the Workspace Management page to obtain the workspace ID. You must set either this parameter or ProjectIdentifier to specify the DataWorks workspace for this API call.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. Log on to the DataWorks console and go to the Workspace Management page to obtain the workspace name. You must set either this parameter or ProjectId to specify the DataWorks workspace for this API call.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      parentFolderPath: 'ParentFolderPath',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      parentFolderPath: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

