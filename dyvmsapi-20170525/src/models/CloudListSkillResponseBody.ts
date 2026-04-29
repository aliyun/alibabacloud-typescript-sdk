// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloudListSkillResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * 描述
   * 
   * @example
   * 示例值示例值示例值
   */
  comment?: string;
  /**
   * @remarks
   * 创建时间,精确到秒
   * 
   * @example
   * 2026-03-30 06:12:41
   */
  createTime?: string;
  /**
   * @remarks
   * 企业编号
   * 
   * @example
   * 7122600
   */
  enterpriseId?: number;
  /**
   * @remarks
   * 技能id
   * 
   * @example
   * 52593
   */
  id?: number;
  /**
   * @remarks
   * 技能名称
   * 
   * @example
   * 示例值示例值
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      createTime: 'CreateTime',
      enterpriseId: 'EnterpriseId',
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      createTime: 'string',
      enterpriseId: 'number',
      id: 'number',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudListSkillResponseBodyData extends $dara.Model {
  /**
   * @example
   * 4
   */
  endRow?: string;
  /**
   * @example
   * 1
   */
  firstPage?: string;
  /**
   * @example
   * true
   */
  hasNextPage?: boolean;
  /**
   * @example
   * false
   */
  hasPreviousPage?: boolean;
  /**
   * @example
   * true
   */
  isFirstPage?: boolean;
  /**
   * @example
   * true
   */
  isLastPage?: boolean;
  /**
   * @example
   * 1
   */
  lastPage?: string;
  list?: CloudListSkillResponseBodyDataList[];
  /**
   * @example
   * ""
   */
  navigatePages?: string;
  navigatepageNums?: string[];
  /**
   * @example
   * 0
   */
  nextPage?: string;
  /**
   * @example
   * ""
   */
  orderBy?: string;
  /**
   * @example
   * 1
   */
  pageNum?: string;
  /**
   * @example
   * 10
   */
  pageSize?: string;
  /**
   * @example
   * 1
   */
  pages?: string;
  /**
   * @example
   * 0
   */
  prePage?: string;
  /**
   * @example
   * 4
   */
  size?: string;
  /**
   * @example
   * 1
   */
  startRow?: string;
  /**
   * @example
   * 4
   */
  total?: string;
  static names(): { [key: string]: string } {
    return {
      endRow: 'EndRow',
      firstPage: 'FirstPage',
      hasNextPage: 'HasNextPage',
      hasPreviousPage: 'HasPreviousPage',
      isFirstPage: 'IsFirstPage',
      isLastPage: 'IsLastPage',
      lastPage: 'LastPage',
      list: 'List',
      navigatePages: 'NavigatePages',
      navigatepageNums: 'NavigatepageNums',
      nextPage: 'NextPage',
      orderBy: 'OrderBy',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      pages: 'Pages',
      prePage: 'PrePage',
      size: 'Size',
      startRow: 'StartRow',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endRow: 'string',
      firstPage: 'string',
      hasNextPage: 'boolean',
      hasPreviousPage: 'boolean',
      isFirstPage: 'boolean',
      isLastPage: 'boolean',
      lastPage: 'string',
      list: { 'type': 'array', 'itemType': CloudListSkillResponseBodyDataList },
      navigatePages: 'string',
      navigatepageNums: { 'type': 'array', 'itemType': 'string' },
      nextPage: 'string',
      orderBy: 'string',
      pageNum: 'string',
      pageSize: 'string',
      pages: 'string',
      prePage: 'string',
      size: 'string',
      startRow: 'string',
      total: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    if(Array.isArray(this.navigatepageNums)) {
      $dara.Model.validateArray(this.navigatepageNums);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CloudListSkillResponseBody extends $dara.Model {
  accessDeniedDetail?: string;
  /**
   * @example
   * OK
   */
  code?: string;
  data?: CloudListSkillResponseBodyData;
  /**
   * @example
   * OK
   */
  message?: string;
  /**
   * @example
   * 7BF47617-7851-48F7-A3A1-2021342A78E2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: CloudListSkillResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

