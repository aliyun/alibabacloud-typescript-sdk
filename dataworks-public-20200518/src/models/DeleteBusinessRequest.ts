// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteBusinessRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow. You can call the [ListBusiness](https://help.aliyun.com/document_detail/173945.html) operation to query the workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000001
   */
  businessId?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the DataWorks console and go to the Workspace Management page to obtain the ID. You must specify either this parameter or ProjectIdentifier to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the DataWorks console and go to the Workspace Settings panel to obtain the name. You must specify either this parameter or ProjectId to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
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

