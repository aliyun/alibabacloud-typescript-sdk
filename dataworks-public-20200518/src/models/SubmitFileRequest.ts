// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitFileRequest extends $dara.Model {
  /**
   * @remarks
   * The comment for the submission.
   * 
   * @example
   * Submit a task for the first time
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the file. Obtain this ID by calling the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000000
   */
  fileId?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the DataWorks Console and go to the Workspace Configurations page to obtain the workspace ID. Specify either this parameter or `ProjectIdentifier` to identify the DataWorks workspace.
   * 
   * @example
   * 100001
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the DataWorks Console and go to the Workspace Configurations page to obtain the workspace name. Specify either this parameter or `ProjectId` to identify the DataWorks workspace.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * Specifies whether to skip the pre-deployment check after the file is submitted.
   * 
   * - false: Do not skip. After the file is submitted, the pre-deployment check process is automatically triggered. The file becomes deployable only after it passes the check.
   * 
   * - true: Skip. The pre-deployment check process is not triggered after the file is submitted. You can proceed directly with the deployment process.
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

