// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EstablishRelationTableToBusinessRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow. You can call the [ListBusiness](https://help.aliyun.com/document_detail/173945.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000001
   */
  businessId?: string;
  /**
   * @remarks
   * The ID of the folder. You can call the [GetFolder](https://help.aliyun.com/document_detail/173952.html) or [ListFolders](https://help.aliyun.com/document_detail/173955.html) operation to query the ID.
   * 
   * @example
   * 2eb6f9****
   */
  folderId?: string;
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
   * The unique identifier of the DataWorks workspace. You can click the identifier in the upper-left corner of the DataStudio page to switch to another workspace.
   * 
   * You must specify either this parameter or ProjectId to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * dw
   */
  projectIdentifier?: string;
  /**
   * @remarks
   * The universally unique identifier (UUID) of the table. You can call the [SearchMetaTables](https://help.aliyun.com/document_detail/173919.html) operation to query the UUID.
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

