// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000001
   */
  fileId?: number;
  /**
   * @remarks
   * The file version whose details you want to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  fileVersion?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can click the Workspace Manage icon in the upper-right corner of the DataStudio page to go to the Workspace page and view the workspace ID.
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
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      fileVersion: 'FileVersion',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      fileVersion: 'number',
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

