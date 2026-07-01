// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOperationRecordRequestListCommand extends $dara.Model {
  /**
   * @remarks
   * The end of the start time range. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-12-31 23:59:59
   */
  beginTimeEnd?: string;
  /**
   * @remarks
   * The beginning of the start time range. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2025-01-01 00:00:00
   */
  beginTimeStart?: string;
  /**
   * @remarks
   * The keyword for code search.
   * 
   * @example
   * select
   */
  codeContent?: string;
  /**
   * @remarks
   * The list of code types.
   */
  codeType?: number[];
  /**
   * @remarks
   * The list of duration ranges.
   */
  duration?: number[];
  /**
   * @remarks
   * The script name.
   * 
   * @example
   * 测试脚本
   */
  fileName?: string;
  /**
   * @remarks
   * The list of object types.
   */
  objectType?: string[];
  /**
   * @remarks
   * The page number. Default value: 1.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The project ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 131211211
   */
  projectId?: number;
  /**
   * @remarks
   * The sort type. Valid values: 0 (start time ascending), 1 (start time descending), 2 (object name).
   * 
   * @example
   * 1
   */
  sortType?: number;
  /**
   * @remarks
   * The list of task statuses.
   */
  status?: number[];
  /**
   * @remarks
   * The list of executor IDs.
   */
  userIds?: string[];
  static names(): { [key: string]: string } {
    return {
      beginTimeEnd: 'BeginTimeEnd',
      beginTimeStart: 'BeginTimeStart',
      codeContent: 'CodeContent',
      codeType: 'CodeType',
      duration: 'Duration',
      fileName: 'FileName',
      objectType: 'ObjectType',
      page: 'Page',
      pageSize: 'PageSize',
      projectId: 'ProjectId',
      sortType: 'SortType',
      status: 'Status',
      userIds: 'UserIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      beginTimeEnd: 'string',
      beginTimeStart: 'string',
      codeContent: 'string',
      codeType: { 'type': 'array', 'itemType': 'number' },
      duration: { 'type': 'array', 'itemType': 'number' },
      fileName: 'string',
      objectType: { 'type': 'array', 'itemType': 'string' },
      page: 'number',
      pageSize: 'number',
      projectId: 'number',
      sortType: 'number',
      status: { 'type': 'array', 'itemType': 'number' },
      userIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.codeType)) {
      $dara.Model.validateArray(this.codeType);
    }
    if(Array.isArray(this.duration)) {
      $dara.Model.validateArray(this.duration);
    }
    if(Array.isArray(this.objectType)) {
      $dara.Model.validateArray(this.objectType);
    }
    if(Array.isArray(this.status)) {
      $dara.Model.validateArray(this.status);
    }
    if(Array.isArray(this.userIds)) {
      $dara.Model.validateArray(this.userIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListOperationRecordRequest extends $dara.Model {
  /**
   * @remarks
   * The query command.
   * 
   * This parameter is required.
   */
  listCommand?: ListOperationRecordRequestListCommand;
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  static names(): { [key: string]: string } {
    return {
      listCommand: 'ListCommand',
      opTenantId: 'OpTenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      listCommand: ListOperationRecordRequestListCommand,
      opTenantId: 'number',
    };
  }

  validate() {
    if(this.listCommand && typeof (this.listCommand as any).validate === 'function') {
      (this.listCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

