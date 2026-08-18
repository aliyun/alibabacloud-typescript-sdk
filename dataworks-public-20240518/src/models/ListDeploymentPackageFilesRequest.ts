// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeploymentPackageFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow. You can call the [ListBusiness](https://help.aliyun.com/document_detail/173945.html) operation to query the ID of the workflow by name.
   * 
   * @example
   * 100001
   */
  businessId?: number;
  /**
   * @remarks
   * The change type. Valid values: 
   * - 0: added.
   * - 1: updated.
   * - 2: deleted.
   * 
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @remarks
   * The start date for the commit, in the format yyyy-MM-dd.
   * 
   * @example
   * 2025-01-01
   */
  commitFrom?: string;
  /**
   * @remarks
   * The end date for the commit (inclusive), in the format yyyy-MM-dd.
   * 
   * @example
   * 2025-01-31
   */
  commitTo?: string;
  /**
   * @remarks
   * The user ID of the committer.
   * 
   * @example
   * 2003****
   */
  commitUserId?: string;
  /**
   * @remarks
   * The list of file IDs to query.
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
   * The code type of the file.
   * 
   * Different file types have different codes. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * You can also call the [ListFileType](https://help.aliyun.com/document_detail/212428.html) operation to query the code type of a file.
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
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the workspace configuration page to obtain the workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  projectId?: number;
  /**
   * @remarks
   * The Solutions ID.
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

