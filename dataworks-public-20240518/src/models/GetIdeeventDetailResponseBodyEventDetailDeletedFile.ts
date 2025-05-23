// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIDEEventDetailResponseBodyEventDetailDeletedFile extends $dara.Model {
  /**
   * @example
   * 74328
   */
  businessId?: number;
  /**
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @example
   * 1
   */
  currentVersion?: number;
  /**
   * @example
   * odps_source
   */
  dataSourceName?: string;
  /**
   * @example
   * 1234123
   */
  fileId?: number;
  /**
   * @example
   * hello_dataworks.sql
   */
  fileName?: string;
  /**
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @example
   * aldurie78l2falure
   */
  folderId?: string;
  /**
   * @example
   * 421429
   */
  nodeId?: number;
  /**
   * @example
   * 7384234****
   */
  owner?: string;
  /**
   * @example
   * 1234122
   */
  parentFileId?: number;
  /**
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

