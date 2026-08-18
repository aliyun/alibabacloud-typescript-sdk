// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBusinessRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the business process. You can call the [ListBusiness](https://help.aliyun.com/document_detail/173945.html) operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000000111
   */
  businessId?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the DataWorks console and go to the workspace configuration page to obtain the workspace ID. You must specify either this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace for this API call.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the DataWorks console and go to the workspace configuration page to obtain the workspace name. You must specify either this parameter or the ProjectId parameter to determine the DataWorks workspace for this API call.
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

