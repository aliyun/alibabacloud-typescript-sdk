// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBizEntitiesResponseBodyPageResultBizEntityList extends $dara.Model {
  belongToBizEntityIdList?: number[];
  /**
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  childBizEntityIdList?: number[];
  /**
   * @example
   * 20101011
   */
  dataDomainId?: number;
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * 业务活动测试
   */
  displayName?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  hasChildBizEntity?: boolean;
  /**
   * @example
   * 12121111
   */
  id?: number;
  /**
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @example
   * 张三
   */
  lastModifierName?: string;
  levelSubBizObject?: boolean;
  /**
   * @example
   * create_process_code_name
   */
  name?: string;
  /**
   * @example
   * SUBMITTED
   */
  onlineStatus?: string;
  /**
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @example
   * 30010010
   */
  ownerUserId?: string;
  refBizEntityIdList?: number[];
  /**
   * @example
   * 1
   */
  refTableCount?: number;
  /**
   * @example
   * SUBMITTED
   */
  status?: string;
  /**
   * @example
   * NORMAL
   */
  subType?: string;
  suffixBizEntityIdList?: number[];
  /**
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      belongToBizEntityIdList: 'BelongToBizEntityIdList',
      bizUnitId: 'BizUnitId',
      childBizEntityIdList: 'ChildBizEntityIdList',
      dataDomainId: 'DataDomainId',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasChildBizEntity: 'HasChildBizEntity',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      levelSubBizObject: 'LevelSubBizObject',
      name: 'Name',
      onlineStatus: 'OnlineStatus',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      refBizEntityIdList: 'RefBizEntityIdList',
      refTableCount: 'RefTableCount',
      status: 'Status',
      subType: 'SubType',
      suffixBizEntityIdList: 'SuffixBizEntityIdList',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      belongToBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      bizUnitId: 'number',
      childBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      dataDomainId: 'number',
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasChildBizEntity: 'boolean',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      levelSubBizObject: 'boolean',
      name: 'string',
      onlineStatus: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      refTableCount: 'number',
      status: 'string',
      subType: 'string',
      suffixBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.belongToBizEntityIdList)) {
      $dara.Model.validateArray(this.belongToBizEntityIdList);
    }
    if(Array.isArray(this.childBizEntityIdList)) {
      $dara.Model.validateArray(this.childBizEntityIdList);
    }
    if(Array.isArray(this.refBizEntityIdList)) {
      $dara.Model.validateArray(this.refBizEntityIdList);
    }
    if(Array.isArray(this.suffixBizEntityIdList)) {
      $dara.Model.validateArray(this.suffixBizEntityIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizEntitiesResponseBodyPageResult extends $dara.Model {
  bizEntityList?: ListBizEntitiesResponseBodyPageResultBizEntityList[];
  /**
   * @example
   * 66
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      bizEntityList: 'BizEntityList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizEntityList: { 'type': 'array', 'itemType': ListBizEntitiesResponseBodyPageResultBizEntityList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.bizEntityList)) {
      $dara.Model.validateArray(this.bizEntityList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListBizEntitiesResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * successful
   */
  message?: string;
  pageResult?: ListBizEntitiesResponseBodyPageResult;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageResult: 'PageResult',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageResult: ListBizEntitiesResponseBodyPageResult,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.pageResult && typeof (this.pageResult as any).validate === 'function') {
      (this.pageResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

