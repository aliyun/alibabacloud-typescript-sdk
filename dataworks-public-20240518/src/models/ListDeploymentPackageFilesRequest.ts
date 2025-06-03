// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentPackageFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The workflow ID. You can call the [ListBusiness](https://help.aliyun.com/document_detail/173945.html) operation to query the workflow ID by name.
   * 
   * @example
   * 100001
   */
  businessId?: number;
  /**
   * @remarks
   * The change type. Valid values:
   * 
   * *   0: addition
   * *   1: update
   * *   2: deletion
   * 
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @remarks
   * The start date for committing. Specify the date in the yyyy-MM-dd format.
   * 
   * @example
   * 2025-01-01
   */
  commitFrom?: string;
  /**
   * @remarks
   * The end date (included) for committing. Specify the date in the yyyy-MM-dd format.
   * 
   * @example
   * 2025-01-31
   */
  commitTo?: string;
  /**
   * @remarks
   * The ID of the user who commits the file.
   * 
   * @example
   * 2003****
   */
  commitUserId?: string;
  /**
   * @remarks
   * The IDs of the files to be queried.
   */
  fileIds?: string[];
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * Filename
   */
  fileName?: string;
  /**
   * @remarks
   * The type of the code for the file.
   * 
   * The code for files varies based on the file type. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html). You can call the [ListFileType](https://help.aliyun.com/document_detail/212428.html) operation to query the type of the code for the file.
   * 
   * @example
   * 10
   */
  fileType?: number;
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
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The solution ID.
   * 
   * @example
   * 8065
   */
  solutionId?: number;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      changeType: 'ChangeType',
      commitFrom: 'CommitFrom',
      commitTo: 'CommitTo',
      commitUserId: 'CommitUserId',
      fileIds: 'FileIds',
      fileName: 'FileName',
      fileType: 'FileType',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      solutionId: 'SolutionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      changeType: 'number',
      commitFrom: 'string',
      commitTo: 'string',
      commitUserId: 'string',
      fileIds: { 'type': 'array', 'itemType': 'string' },
      fileName: 'string',
      fileType: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      solutionId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.fileIds)) {
      $dara.Model.validateArray(this.fileIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

