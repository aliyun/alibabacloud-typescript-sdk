// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployFileRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the deployment operation.
   * 
   * @example
   * First release task
   */
  comment?: string;
  /**
   * @remarks
   * The file ID. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the file ID. You must configure either this parameter or the NodeId parameter.
   * 
   * @example
   * 10000001
   */
  fileId?: number;
  /**
   * @remarks
   * The ID of the node in the scheduling system that corresponds to the file that you want to deploy. You must configure either the NodeId parameter or the FileId parameter.
   * 
   * @example
   * 2000001
   */
  nodeId?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the DataWorks console and go to the Workspace Management page to obtain the workspace ID. You must configure either this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the DataWorks console and go to the Workspace Management page to obtain the workspace name. You must configure either this parameter or the ProjectId parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      fileId: 'FileId',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      fileId: 'number',
      nodeId: 'number',
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

