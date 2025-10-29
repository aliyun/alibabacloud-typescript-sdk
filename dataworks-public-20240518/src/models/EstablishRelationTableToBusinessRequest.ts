// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstablishRelationTableToBusinessRequest extends $dara.Model {
  /**
   * @remarks
   * The workflow ID. You can call the [ListBusiness](https://help.aliyun.com/document_detail/173945.html) operation to obtain the workflow ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000001
   */
  businessId?: string;
  /**
   * @remarks
   * The ID of the folder. You can call the [GetFolder](https://help.aliyun.com/document_detail/173952.html) or [ListFolders](https://help.aliyun.com/document_detail/173955.html) operation to obtain the folder ID.
   * 
   * @example
   * 2eb6f9****
   */
  folderId?: string;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can click the wrench icon in the top-right corner to access the workspace management page and view the ID.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The unique identifier of the DataWorks workspace. This is the identifier shown in the workspace switcher at the top of the Data Studio page.
   * 
   * Either this parameter or ProjectId must be specified to determine which DataWorks workspace this API call operates on.
   * 
   * @example
   * dw
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The UUID of the table. You can call the [SearchMetaTables](https://help.aliyun.com/document_detail/173919.html) operation to obtain the table UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * odps.dw_project.tb1
   */
  tableGuid?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      folderId: 'FolderId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      tableGuid: 'TableGuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'string',
      folderId: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
      tableGuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

