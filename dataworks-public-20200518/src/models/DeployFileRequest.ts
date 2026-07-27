// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployFileRequest extends $dara.Model {
  /**
   * @remarks
   * Description of this deployment.
   * 
   * @example
   * First release task
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the file. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to obtain this ID. You only need to specify this parameter or the `NodeId` parameter.
   * 
   * @example
   * 10000022
   */
  fileId?: number;
  /**
   * @remarks
   * The ID of the task in the scheduling system for the file to be deployed. You only need to specify either this parameter or the `FileId` parameter.
   * 
   * @example
   * 2000001
   */
  nodeId?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log in to the DataWorks console and go to the workspace configuration page to obtain the workspace ID. You must set either this parameter or the ProjectIdentifier parameter to specify the DataWorks workspace for the API call.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the DataWorks console and go to the workspace configuration page to obtain the workspace name. You must set either this parameter or the `ProjectId` parameter to specify the DataWorks workspace for this API call.
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

