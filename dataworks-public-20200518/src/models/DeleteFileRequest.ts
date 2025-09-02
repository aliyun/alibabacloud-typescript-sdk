// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteFileRequest extends $dara.Model {
  /**
   * @remarks
   * The file ID. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 10000001
   */
  fileId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace Management page to view the workspace name.
   * 
   * You must specify one of the ProjectId and ProjectIdentifier parameters to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The ID of the file. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the ID of the file.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
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

