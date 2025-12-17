// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ListProjectsResponseBodyListProject extends $dara.Model {
  /**
   * @remarks
   * Text comment for the field
   * 
   * @example
   * 测试专用
   */
  comment?: string;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1708171905000
   */
  createTime?: number;
  /**
   * @remarks
   * Creator ID
   * 
   * @example
   * 1048133943212399
   */
  creator?: string;
  /**
   * @remarks
   * Creator\\"s name
   * 
   * @example
   * user_name
   * 
   * **if can be null:**
   * true
   */
  creatorName?: string;
  /**
   * @remarks
   * Project name
   * 
   * @example
   * poc_test
   */
  projectName?: string;
  /**
   * @remarks
   * Update time
   * 
   * @example
   * 1708171905000
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      creator: 'Creator',
      creatorName: 'CreatorName',
      projectName: 'ProjectName',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'number',
      creator: 'string',
      creatorName: 'string',
      projectName: 'string',
      updateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBodyList extends $dara.Model {
  project?: ListProjectsResponseBodyListProject[];
  static names(): { [key: string]: string } {
    return {
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      project: { 'type': 'array', 'itemType': ListProjectsResponseBodyListProject },
    };
  }

  validate() {
    if(Array.isArray(this.project)) {
      $dara.Model.validateArray(this.project);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Project name
   */
  list?: ListProjectsResponseBodyList;
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 1
   */
  pageCount?: string;
  /**
   * @remarks
   * Current page number
   * 
   * @example
   * 84
   */
  pageNumber?: string;
  /**
   * @remarks
   * Page size
   * 
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 20250401102332e68e3d0b04ab4904
   */
  requestId?: string;
  /**
   * @remarks
   * Whether the operation was successful
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Total number of query results
   * 
   * @example
   * 50
   */
  totalCount?: string;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageCount: 'PageCount',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: ListProjectsResponseBodyList,
      pageCount: 'string',
      pageNumber: 'string',
      pageSize: 'string',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'string',
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

