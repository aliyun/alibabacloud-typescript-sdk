// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIDEEventDetailResponseBodyEventDetailDeletedFile extends $dara.Model {
  /**
   * @remarks
   * The ID of the workflow to which the file belongs.
   * 
   * @example
   * 74328
   */
  businessId?: number;
  /**
   * @remarks
   * The code in the file of the current version.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * The latest version number of the file.
   * 
   * @example
   * 1
   */
  currentVersion?: number;
  /**
   * @remarks
   * The name of the data source with which the file is associated.
   * 
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 1234123
   */
  fileId?: number;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * hello_dataworks.sql
   */
  fileName?: string;
  /**
   * @remarks
   * The file type. The code for files varies based on the file type. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * The ID of the folder to which the file belongs. You can call the [GetFolder](https://help.aliyun.com/document_detail/173952.html) operation to query the details of the file based on the folder ID.
   * 
   * @example
   * aldurie78l2falure
   */
  folderId?: string;
  /**
   * @remarks
   * The ID of the node that is scheduled.
   * 
   * @example
   * 421429
   */
  nodeId?: number;
  /**
   * @remarks
   * The file owner.
   * 
   * @example
   * 7384234****
   */
  owner?: string;
  /**
   * @remarks
   * The ID of the do-while node or for-each node that corresponds to the file.
   * 
   * @example
   * 1234122
   */
  parentFileId?: number;
  /**
   * @remarks
   * The module to which the file belongs. Valid values:
   * 
   * *   NORMAL: The file is used for DataStudio.
   * *   MANUAL: The file is used for a manually triggered node.
   * *   MANUAL_BIZ: The file is used for a manually triggered workflow.
   * *   SKIP: The file is used for a dry-run node in DataStudio.
   * *   ADHOCQUERY: The file is used for an ad hoc query.
   * *   COMPONENT: The file is used for a script template.
   * 
   * @example
   * NORMAL
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      content: 'Content',
      currentVersion: 'CurrentVersion',
      dataSourceName: 'DataSourceName',
      fileId: 'FileId',
      fileName: 'FileName',
      fileType: 'FileType',
      folderId: 'FolderId',
      nodeId: 'NodeId',
      owner: 'Owner',
      parentFileId: 'ParentFileId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      content: 'string',
      currentVersion: 'number',
      dataSourceName: 'string',
      fileId: 'number',
      fileName: 'string',
      fileType: 'number',
      folderId: 'string',
      nodeId: 'number',
      owner: 'string',
      parentFileId: 'number',
      useType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

