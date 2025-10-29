// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployFileRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the deployment.
   * 
   * @example
   * First release task
   */
  comment?: string;
  /**
   * @remarks
   * The file ID. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to obtain the ID. You need to configure either this parameter or the NodeId parameter.
   * 
   * @example
   * 10000001
   */
  fileId?: number;
  /**
   * @remarks
   * The task ID of the file to be deployed in the scheduling system. You need to configure either this parameter or the FileId parameter.
   * 
   * @example
   * 2000001
   */
  nodeId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console and go to the Workspace page to query the ID. You must specify either this parameter or the ProjectIdentifier parameter to identify the DataWorks workspace when you call this operation.
   * 
   * @example
   * 10000
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

