// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBusinessRequest extends $dara.Model {
  /**
   * @remarks
   * Name of the Business Process.<br>
   * The name must be unique within the same project space.
   * 
   * This parameter is required.
   * 
   * @example
   * My business process
   */
  businessName?: string;
  /**
   * @remarks
   * Description of the Business Process.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the owner responsible for the Business Process.<br>
   * You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console), move the mouse pointer over the profile picture in the upper-right corner of the menu bar, and view the Account ID. If this parameter is empty, the Alibaba Cloud account ID of the invoker is used by default.
   * 
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace.<br>
   * You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console), go to the Workspace Management page, and view the ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The unique identifier of the DataWorks workspace, which is the English identifier displayed when you switch workspaces at the top of the Data Development page. You must specify either this parameter or the projectid parameter to identify the DataWorks project for this API call.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * Function module to which the Business Process belongs. Valid values:
   * 
   * - NORMAL (Data Development)
   * 
   * - MANUAL_BIZ (manually triggered workflow)
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

