// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBusinessRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the business process. The name must be unique within the same workspace.
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
   * The Alibaba Cloud account ID of the owner of the business process. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and hover over the profile picture in the upper-right corner of the top navigation bar to view the account ID. If this parameter is left empty, the Alibaba Cloud account ID of the caller is used by default.
   * 
   * @example
   * 1000000000001
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to view the ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The unique identifier (workspace name) of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Configuration page to view the name.
   * You must specify either this parameter or projectId to determine the DataWorks project for this API call.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The functional module to which the business process belongs. Valid values:
   * - NORMAL: DataStudio.
   * - MANUAL_BIZ: manual business process.
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

