// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBusinessRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the business process. The name of the business process in the same project must be unique.
   * 
   * This parameter is required.
   * 
   * @example
   * My business process
   */
  businessName?: string;
  /**
   * @remarks
   * The description of the business process.
   * 
   * @example
   * This is a business process created through an interface.
   */
  description?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the owner of the business process. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and hover over the user avatar on the right side of the top menu bar to view the account ID. If this parameter is empty, the caller\\"s Alibaba Cloud account ID is used by default.
   * 
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to obtain the workspace ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to obtain the workspace name. You must configure either this parameter or ProjectId parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The module to which the workflow belongs. Valid values:
   * 
   * *   NORMAL: The workflow belongs to auto triggered workflows.
   * *   MANUAL_BIZ: The workflow belongs to manually triggered workflows.
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

