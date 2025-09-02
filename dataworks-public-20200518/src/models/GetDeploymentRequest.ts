// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDeploymentRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the deployment task. A deployment task ID is generated when you call the [SubmitFile](https://help.aliyun.com/document_detail/173944.html) or [DeployFile](https://help.aliyun.com/document_detail/173956.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 3000001
   */
  deploymentId?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can click the Workspace Manage icon in the upper-right corner of the DataStudio page to go to the Workspace Management page and view the workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The GUID of the DataWorks workspace. You can view the GUID in the upper part of the DataStudio page. You can also select another GUID to switch to another workspace.
   * 
   * You must specify either this parameter or the ProjectId parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      deploymentId: 'DeploymentId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deploymentId: 'number',
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

