// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBusinessRequest extends $dara.Model {
  /**
   * @remarks
   * The workflow ID.
   * 
   * You can call the [ListBusiness](https://help.aliyun.com/document_detail/173945.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 300000
   */
  businessId?: number;
  /**
   * @remarks
   * The name of the workflow.
   * 
   * You can call the [ListBusiness](https://help.aliyun.com/document_detail/173945.html) operation to query the name.
   * 
   * @example
   * MyBusiness
   */
  businessName?: string;
  /**
   * @remarks
   * The description of the workflow.
   * 
   * @example
   * modified from my first business
   */
  description?: string;
  /**
   * @remarks
   * The owner of the workflow.
   * 
   * You can call the [ListBusiness](https://help.aliyun.com/document_detail/173945.html) operation to query the owner.
   * 
   * @example
   * 348428****
   */
  owner?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/workspace/list) and go to the Workspace page to obtain the workspace ID. You must configure either this parameter or the `ProjectIdentifier` parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the [DataWorks console](https://dataworks.console.aliyun.com/workspace/list) and go to the Workspace page to obtain the name. You must configure either this parameter or the `ProjectId` parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      description: 'Description',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      businessName: 'string',
      description: 'string',
      owner: 'string',
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

