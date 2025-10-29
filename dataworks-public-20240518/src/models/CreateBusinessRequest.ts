// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBusinessRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the workflow. Workflow names must be unique within the same workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * My business process
   */
  businessName?: string;
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the person responsible for the workflow. You can view the account ID by hovering over the user avatar in the top-right corner of the [DataWorks console](https://workbench.data.aliyun.com/console). If this parameter is not specified, the account ID of the API caller is used by default.
   * 
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can view the workspace ID on the workspace management page in the [DataWorks console](https://workbench.data.aliyun.com/console).
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The unique identifier of the DataWorks workspace, This is the identifier shown in the workspace switch at the top of the Data Studio page. Either this parameter or ProjectId must be specified to determine which DataWorks project this API call operates on.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The module to which the workflow belongs. Valid values:
   * 
   * *   NORMAL: Data Studio
   * *   MANUAL_BIZ: Manually triggered workflow
   * 
   * @example
   * NORMAL
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      businessName: 'BusinessName',
      description: 'Description',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessName: 'string',
      description: 'string',
      owner: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      useType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

