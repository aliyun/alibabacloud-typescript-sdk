// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBizEntitiesResponseBodyPageResultBizEntityList extends $dara.Model {
  /**
   * @remarks
   * The list of parent business process IDs. This parameter is valid only when the entity type is business process.
   */
  belongToBizEntityIdList?: number[];
  /**
   * @remarks
   * The ID of the business unit to which the business process belongs.
   * 
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @remarks
   * The list of child business object IDs. This parameter is valid only when the entity type is business object.
   */
  childBizEntityIdList?: number[];
  /**
   * @remarks
   * The ID of the data domain to which the business process belongs.
   * 
   * @example
   * 20101011
   */
  dataDomainId?: number;
  /**
   * @remarks
   * The description of the business entity.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The display name of the business entity.
   * 
   * @example
   * 业务活动测试
   */
  displayName?: string;
  /**
   * @remarks
   * The time when the business entity was created.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the business entity was last modified.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModified?: string;
  /**
   * @remarks
   * Indicates whether the entity is a child business object.
   */
  hasChildBizEntity?: boolean;
  /**
   * @remarks
   * The ID of the business entity.
   * 
   * @example
   * 12121111
   */
  id?: number;
  /**
   * @remarks
   * The ID of the user who last modified the business entity.
   * 
   * @example
   * 30010010
   */
  lastModifier?: string;
  /**
   * @remarks
   * The name of the user who last modified the business entity.
   * 
   * @example
   * 张三
   */
  lastModifierName?: string;
  /**
   * @remarks
   * Indicates whether the entity is a sublevel of a hierarchy dimension.
   */
  levelSubBizObject?: boolean;
  /**
   * @remarks
   * The name of the business entity.
   * 
   * @example
   * create_process_code_name
   */
  name?: string;
  /**
   * @remarks
   * The online status of the business entity. Valid values: 
   * - SUBMITTED: not online.
   * - APPROVING: pending approval.
   * - PUBLISHED: online.
   * - REJECT: failed to go online.
   * 
   * @example
   * SUBMITTED
   */
  onlineStatus?: string;
  /**
   * @remarks
   * The ID of the business entity owner.
   * 
   * @example
   * 张三
   */
  ownerName?: string;
  /**
   * @remarks
   * The ID of the business entity owner.
   * 
   * @example
   * 30010010
   */
  ownerUserId?: string;
  /**
   * @remarks
   * The list of associated central business entity IDs.
   */
  refBizEntityIdList?: number[];
  /**
   * @remarks
   * The number of associated logical tables.
   * 
   * @example
   * 1
   */
  refTableCount?: number;
  /**
   * @remarks
   * The status of the business entity. Valid values:
   * - DRAFT: draft or not online.
   * - SUBMITTING: being submitted.
   * - SUBMITTED: submitted.
   * - DEVELOPING: under development.
   * - PUBLISHING: being published.
   * - PUBLISHED: published.
   * 
   * @example
   * SUBMITTED
   */
  status?: string;
  /**
   * @remarks
   * The subtype of the business entity.
   * 
   * @example
   * NORMAL
   */
  subType?: string;
  /**
   * @remarks
   * The list of subsequent business process IDs. This parameter is valid only when the entity type is business process.
   */
  suffixBizEntityIdList?: number[];
  /**
   * @remarks
   * The type of the business entity. Valid values:
   * - BIZ_OBJECT: business object.
   * - BIZ_PROCESS: business process.
   * 
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
  /**
   * @remarks
   * The list of business entities.
   */
  bizEntityList?: ListBizEntitiesResponseBodyPageResultBizEntityList[];
  /**
   * @remarks
   * The total number of records.
   * 
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
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The paginated result.
   */
  pageResult?: ListBizEntitiesResponseBodyPageResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
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

