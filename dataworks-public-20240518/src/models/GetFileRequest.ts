// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the file. You can invoke the [ListFiles](https://help.aliyun.com/document_detail/173942.html) API to query the ID of the corresponding file.
   * 
   * @example
   * 100000001
   */
  fileId?: number;
  /**
   * @remarks
   * The ID of the scheduling node. You can invoke the [ListFiles](https://help.aliyun.com/document_detail/173942.html) API to obtain the node ID.
   * 
   * @example
   * 200000001
   */
  nodeId?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console), and go to the workspace configuration page to obtain the workspace ID.
   * 
   * You must specify either this parameter or the ProjectIdentifier parameter to identify the DataWorks workspace for this API call.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console), and go to the workspace configuration page to obtain the workspace name.
   * 
   * You must specify either this parameter or the ProjectId parameter to identify the DataWorks workspace for this API call.
   * 
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      fileId: 'FileId',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileId: 'number',
      nodeId: 'number',
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

