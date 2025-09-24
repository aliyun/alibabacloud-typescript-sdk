// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryRelationListResponseBodyDataFinancialRelationInfoList extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 1851253838840762
   */
  accountId?: number;
  /**
   * @remarks
   * The name of the account.
   * 
   * @example
   * caiwuyun_test4
   */
  accountName?: string;
  /**
   * @remarks
   * The display name of the account.
   * 
   * @example
   * test4
   */
  accountNickName?: string;
  /**
   * @remarks
   * The type of the account. Valid values: MASTER and MEMBER.
   * 
   * @example
   * MEMBER
   */
  accountType?: string;
  /**
   * @remarks
   * The time when the relationship became invalid. If no value is returned, the relationship is still valid.
   * 
   * @example
   * 2021-03-08T15:12Z
   */
  endTime?: string;
  /**
   * @remarks
   * The ID of the relationship.
   * 
   * @example
   * 51463
   */
  relationId?: number;
  /**
   * @remarks
   * The type of the relationship. Valid values: FinancialManagement and FinancialTrusteeship.
   * 
   * @example
   * FinancialManagement
   */
  relationType?: string;
  /**
   * @remarks
   * The time when the relationship was established. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC. Example: 2016-05-23T12:00:00Z.
   * 
   * @example
   * 2021-03-02T15:12Z
   */
  setupTime?: string;
  /**
   * @remarks
   * The time when the relationship became valid. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC. Example: 2016-05-23T12:00:00Z.
   * 
   * @example
   * 2021-03-02T15:12Z
   */
  startTime?: string;
  /**
   * @remarks
   * The state of the relationship. One of the enumeration members of the RelationshipStatusEnum data type is returned.
   * 
   * @example
   * RELATED
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      accountName: 'AccountName',
      accountNickName: 'AccountNickName',
      accountType: 'AccountType',
      endTime: 'EndTime',
      relationId: 'RelationId',
      relationType: 'RelationType',
      setupTime: 'SetupTime',
      startTime: 'StartTime',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'number',
      accountName: 'string',
      accountNickName: 'string',
      accountType: 'string',
      endTime: 'string',
      relationId: 'number',
      relationType: 'string',
      setupTime: 'string',
      startTime: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The relationships.
   */
  financialRelationInfoList?: QueryRelationListResponseBodyDataFinancialRelationInfoList[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      financialRelationInfoList: 'FinancialRelationInfoList',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      financialRelationInfoList: { 'type': 'array', 'itemType': QueryRelationListResponseBodyDataFinancialRelationInfoList },
      pageNum: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.financialRelationInfoList)) {
      $dara.Model.validateArray(this.financialRelationInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryRelationListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryRelationListResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful!
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7FC5D662-37FD-40A6-85B1-33442D815184
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryRelationListResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

