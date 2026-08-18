// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file. You can call [ListFiles](https://help.aliyun.com/document_detail/173942.html) to query the file ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1000001
   */
  fileId?: number;
  /**
   * @remarks
   * The version of the file to query.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  fileVersion?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can click the small wrench icon in the upper-right corner of the page to go to the storage management page and view the ID.
   * 
   * @example
   * 1000011
   */
  projectId?: number;
  /**
   * @remarks
   * The unique identifier of the DataWorks workspace, which is the English identifier displayed at the top of the DataStudio page for switching workspaces.
   * 
   * You must set either this parameter or ProjectId to determine the DataWorks workspace for this API call.
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

