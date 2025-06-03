// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileRequest extends $dara.Model {
  /**
   * @remarks
   * The file ID. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the ID.
   * 
   * @example
   * 100000001
   */
  fileId?: number;
  /**
   * @remarks
   * The ID of the node that is scheduled. You can call the [ListFiles](https://help.aliyun.com/document_detail/173942.html) operation to query the ID.
   * 
   * @example
   * 200000001
   */
  nodeId?: number;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the ID.
   * 
   * You must configure either this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the DataWorks workspace. You can log on to the [DataWorks console](https://workbench.data.aliyun.com/console) and go to the Workspace page to query the name.
   * 
   * You must configure either this parameter or the ProjectId parameter to determine the DataWorks workspace to which the operation is applied.
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

