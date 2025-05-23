// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileResponseBodyDataFile extends $dara.Model {
  /**
   * @example
   * {\\"priority\\":\\"1\\",\\"ENABLE_SPARKSQL_JDBC\\":false,\\"FLOW_SKIP_SQL_ANALYZE\\":false,\\"queue\\":\\"default\\"}
   */
  advancedSettings?: string;
  /**
   * @example
   * true
   */
  autoParsing?: boolean;
  /**
   * @example
   * 1000001
   */
  bizId?: number;
  /**
   * @example
   * 1000001
   */
  businessId?: number;
  /**
   * @example
   * 0
   */
  commitStatus?: number;
  /**
   * @example
   * odps_source
   */
  connectionName?: string;
  /**
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @example
   * 1593879116000
   */
  createTime?: number;
  /**
   * @example
   * 424732****
   */
  createUser?: string;
  /**
   * @example
   * 3
   */
  currentVersion?: number;
  /**
   * @example
   * RECYCLE
   */
  deletedStatus?: string;
  /**
   * @example
   * My first DataWorks file
   */
  fileDescription?: string;
  /**
   * @example
   * 2735c2****
   */
  fileFolderId?: string;
  /**
   * @example
   * 100000001
   */
  fileId?: number;
  /**
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @example
   * true
   */
  isMaxCompute?: boolean;
  /**
   * @example
   * 1593879116000
   */
  lastEditTime?: number;
  /**
   * @example
   * 424732****
   */
  lastEditUser?: string;
  /**
   * @example
   * 300001
   */
  nodeId?: number;
  /**
   * @example
   * 7775674356****
   */
  owner?: string;
  /**
   * @example
   * -1
   */
  parentId?: number;
  /**
   * @example
   * NORMAL
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      advancedSettings: 'AdvancedSettings',
      autoParsing: 'AutoParsing',
      bizId: 'BizId',
      businessId: 'BusinessId',
      commitStatus: 'CommitStatus',
      connectionName: 'ConnectionName',
      content: 'Content',
      createTime: 'CreateTime',
      createUser: 'CreateUser',
      currentVersion: 'CurrentVersion',
      deletedStatus: 'DeletedStatus',
      fileDescription: 'FileDescription',
      fileFolderId: 'FileFolderId',
      fileId: 'FileId',
      fileName: 'FileName',
      fileType: 'FileType',
      isMaxCompute: 'IsMaxCompute',
      lastEditTime: 'LastEditTime',
      lastEditUser: 'LastEditUser',
      nodeId: 'NodeId',
      owner: 'Owner',
      parentId: 'ParentId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advancedSettings: 'string',
      autoParsing: 'boolean',
      bizId: 'number',
      businessId: 'number',
      commitStatus: 'number',
      connectionName: 'string',
      content: 'string',
      createTime: 'number',
      createUser: 'string',
      currentVersion: 'number',
      deletedStatus: 'string',
      fileDescription: 'string',
      fileFolderId: 'string',
      fileId: 'number',
      fileName: 'string',
      fileType: 'number',
      isMaxCompute: 'boolean',
      lastEditTime: 'number',
      lastEditUser: 'string',
      nodeId: 'number',
      owner: 'string',
      parentId: 'number',
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

