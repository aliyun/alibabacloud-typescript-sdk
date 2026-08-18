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
   * The ID of the file. You can call [ListFiles](https://help.aliyun.com/document_detail/173942.html) to query the file ID. You need to specify only one of this parameter and the NodeId parameter settings.
   * 
   * @example
   * 10000001
   */
  fileId?: number;
  /**
   * @remarks
   * The ID of the node in the scheduling system that corresponds to the file to be published.
   * 
   * You need to specify only one of this parameter and the FileId parameter settings.
   * 
   * @example
   * 2000001
   */
  nodeId?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * You can log on to the DataWorks console and go to the workspace configuration page to obtain the workspace ID. You must specify either this parameter or ProjectIdentifier to determine the DataWorks workspace for this API call.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace.
   * 
   * You can log on to the DataWorks console and go to the workspace configuration page to obtain the workspace name. You must specify either this parameter or ProjectId to determine the DataWorks workspace for this API call.
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

