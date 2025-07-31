// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizObject extends $dara.Model {
  /**
   * @example
   * 221323121212
   */
  approvalId?: string;
  /**
   * @example
   * APPROVING
   */
  approvalStatus?: string;
  childBizEntityIdList?: number[];
  /**
   * @example
   * test
   */
  description?: string;
  /**
   * @example
   * create_object_name
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
  /**
   * @example
   * 1011
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
  /**
   * @example
   * create_object_code_name
   */
  name?: string;
  /**
   * @example
   * 1
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
  /**
   * @example
   * 116306
   */
  parentId?: number;
  refBizEntityIdList?: number[];
  /**
   * @example
   * 1
   */
  refDimTableCount?: number;
  /**
   * @example
   * 1
   */
  refSummaryTableCount?: number;
  /**
   * @example
   * 100
   */
  status?: string;
  /**
   * @example
   * NORMAL
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      approvalId: 'ApprovalId',
      approvalStatus: 'ApprovalStatus',
      childBizEntityIdList: 'ChildBizEntityIdList',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      onlineStatus: 'OnlineStatus',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      parentId: 'ParentId',
      refBizEntityIdList: 'RefBizEntityIdList',
      refDimTableCount: 'RefDimTableCount',
      refSummaryTableCount: 'RefSummaryTableCount',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalId: 'string',
      approvalStatus: 'string',
      childBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      onlineStatus: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      parentId: 'number',
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      refDimTableCount: 'number',
      refSummaryTableCount: 'number',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.childBizEntityIdList)) {
      $dara.Model.validateArray(this.childBizEntityIdList);
    }
    if(Array.isArray(this.refBizEntityIdList)) {
      $dara.Model.validateArray(this.refBizEntityIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizProcess extends $dara.Model {
  /**
   * @example
   * 221323121212
   */
  approvalId?: string;
  /**
   * @example
   * APPROVING
   */
  approvalStatus?: string;
  bizEventEntityIdList?: number[];
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
  hasDependent?: boolean;
  /**
   * @example
   * 1011
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
  /**
   * @example
   * create_process_code_name
   */
  name?: string;
  /**
   * @example
   * 1
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
  preBizProcessIdList?: number[];
  refBizEntityIdList?: number[];
  /**
   * @example
   * 1
   */
  refFactTableCount?: number;
  /**
   * @example
   * 100
   */
  status?: string;
  /**
   * @example
   * BIZ_EVENT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      approvalId: 'ApprovalId',
      approvalStatus: 'ApprovalStatus',
      bizEventEntityIdList: 'BizEventEntityIdList',
      description: 'Description',
      displayName: 'DisplayName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      hasDependent: 'HasDependent',
      id: 'Id',
      lastModifier: 'LastModifier',
      lastModifierName: 'LastModifierName',
      name: 'Name',
      onlineStatus: 'OnlineStatus',
      ownerName: 'OwnerName',
      ownerUserId: 'OwnerUserId',
      preBizProcessIdList: 'PreBizProcessIdList',
      refBizEntityIdList: 'RefBizEntityIdList',
      refFactTableCount: 'RefFactTableCount',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      approvalId: 'string',
      approvalStatus: 'string',
      bizEventEntityIdList: { 'type': 'array', 'itemType': 'number' },
      description: 'string',
      displayName: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      hasDependent: 'boolean',
      id: 'number',
      lastModifier: 'string',
      lastModifierName: 'string',
      name: 'string',
      onlineStatus: 'string',
      ownerName: 'string',
      ownerUserId: 'string',
      preBizProcessIdList: { 'type': 'array', 'itemType': 'number' },
      refBizEntityIdList: { 'type': 'array', 'itemType': 'number' },
      refFactTableCount: 'number',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.bizEventEntityIdList)) {
      $dara.Model.validateArray(this.bizEventEntityIdList);
    }
    if(Array.isArray(this.preBizProcessIdList)) {
      $dara.Model.validateArray(this.preBizProcessIdList);
    }
    if(Array.isArray(this.refBizEntityIdList)) {
      $dara.Model.validateArray(this.refBizEntityIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoByVersionResponseBodyBizEntityInfo extends $dara.Model {
  bizObject?: GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizObject;
  bizProcess?: GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizProcess;
  /**
   * @example
   * 6798087749072704
   */
  bizUnitId?: number;
  /**
   * @example
   * 20101011
   */
  dataDomainId?: number;
  /**
   * @example
   * BIZ_OBJECT
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bizObject: 'BizObject',
      bizProcess: 'BizProcess',
      bizUnitId: 'BizUnitId',
      dataDomainId: 'DataDomainId',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizObject: GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizObject,
      bizProcess: GetBizEntityInfoByVersionResponseBodyBizEntityInfoBizProcess,
      bizUnitId: 'number',
      dataDomainId: 'number',
      type: 'string',
    };
  }

  validate() {
    if(this.bizObject && typeof (this.bizObject as any).validate === 'function') {
      (this.bizObject as any).validate();
    }
    if(this.bizProcess && typeof (this.bizProcess as any).validate === 'function') {
      (this.bizProcess as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBizEntityInfoByVersionResponseBody extends $dara.Model {
  bizEntityInfo?: GetBizEntityInfoByVersionResponseBodyBizEntityInfo;
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
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      bizEntityInfo: 'BizEntityInfo',
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizEntityInfo: GetBizEntityInfoByVersionResponseBodyBizEntityInfo,
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.bizEntityInfo && typeof (this.bizEntityInfo as any).validate === 'function') {
      (this.bizEntityInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

