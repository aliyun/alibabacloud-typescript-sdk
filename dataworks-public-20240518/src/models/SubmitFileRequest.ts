// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitFileRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the submission.
   * 
   * @example
   * Submit a task for the first time
   */
  comment?: string;
  /**
   * @remarks
   * The file ID. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000000
   */
  fileId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console and go to the Workspace page to query the ID. You must specify either this parameter or the ProjectIdentifier parameter to identify the DataWorks workspace when you call this operation.
   * 
   * @example
   * 100001
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the DataWorks console and go to the Workspace page to query the workspace name. You must specify either this parameter or the ProjectId parameter to identify the DataWorks workspace when you call this operation.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * Whether to skip the pre-deployment check after the file is submitted:
   * 
   * *   false: Do not skip. After the file is submitted, the system automatically triggers the pre-deployment check. The file becomes available for deployment only after the check is passed.
   * *   true: Skip. After the file is submitted, the system does not trigger the pre-deployment check. The file can proceed directly to deployment.
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

