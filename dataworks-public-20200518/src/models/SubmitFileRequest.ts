// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitFileRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the commit operation.
   * 
   * @example
   * Submit a task for the first time
   */
  comment?: string;
  /**
   * @remarks
   * The file ID. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000000
   */
  fileId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console and go to the Workspace page to query the ID. You must configure either this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the DataWorks console and go to the Workspace page to obtain the workspace name. You must configure either this parameter or the ProjectId parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * Specifies whether to skip the pre-publish check after the file is committed. Valid values:
   * 
   * *   false: indicates that the pre-publish check is not skipped. After the file is committed, the pre-publish check is automatically triggered. The file can be deployed only after the file passes the check.
   * *   true: indicates that the pre-publish check is skipped. After the file is submitted, the pre-publish check process is not triggered. You can directly deploy the file.
   * 
   * @example
   * false
   */
  skipAllDeployFileExtensions?: boolean;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      fileId: 'FileId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      skipAllDeployFileExtensions: 'SkipAllDeployFileExtensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      fileId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
      skipAllDeployFileExtensions: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

