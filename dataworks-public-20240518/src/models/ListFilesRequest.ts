// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFilesRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  commitStatus?: number;
  /**
   * @example
   * ods_create.sql
   */
  exactFileName?: string;
  /**
   * @example
   * Business_process/my_first_business_process/MaxCompute/ods_layer
   */
  fileFolderPath?: string;
  /**
   * @example
   * 78237,816123
   */
  fileIdIn?: string;
  /**
   * @example
   * 10,23
   */
  fileTypes?: string;
  /**
   * @example
   * ods
   */
  keyword?: string;
  /**
   * @example
   * 11233***
   */
  lastEditUser?: string;
  /**
   * @example
   * false
   */
  needAbsoluteFolderPath?: boolean;
  /**
   * @example
   * false
   */
  needContent?: boolean;
  /**
   * @example
   * 123541234
   */
  nodeId?: number;
  /**
   * @example
   * 3726346****
   */
  owner?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  /**
   * @example
   * NORMAL
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      commitStatus: 'CommitStatus',
      exactFileName: 'ExactFileName',
      fileFolderPath: 'FileFolderPath',
      fileIdIn: 'FileIdIn',
      fileTypes: 'FileTypes',
      keyword: 'Keyword',
      lastEditUser: 'LastEditUser',
      needAbsoluteFolderPath: 'NeedAbsoluteFolderPath',
      needContent: 'NeedContent',
      nodeId: 'NodeId',
      owner: 'Owner',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitStatus: 'number',
      exactFileName: 'string',
      fileFolderPath: 'string',
      fileIdIn: 'string',
      fileTypes: 'string',
      keyword: 'string',
      lastEditUser: 'string',
      needAbsoluteFolderPath: 'boolean',
      needContent: 'boolean',
      nodeId: 'number',
      owner: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
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

