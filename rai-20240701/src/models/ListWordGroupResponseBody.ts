// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListWordGroupResponseBodyWordGroupInfoListPolicyInfoList extends $dara.Model {
  /**
   * @remarks
   * Detection policy ID.
   * 
   * @example
   * 16
   */
  policyId?: number;
  /**
   * @remarks
   * Policy identifier.
   * 
   * @example
   * mai934jhuekf
   */
  policyIdentifier?: string;
  /**
   * @remarks
   * Detection policy name.
   * 
   * @example
   * testPoliy
   */
  policyName?: string;
  static names(): { [key: string]: string } {
    return {
      policyId: 'PolicyId',
      policyIdentifier: 'PolicyIdentifier',
      policyName: 'PolicyName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyId: 'number',
      policyIdentifier: 'string',
      policyName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWordGroupResponseBodyWordGroupInfoList extends $dara.Model {
  /**
   * @remarks
   * Policy modification time.
   * 
   * @example
   * 1673578650000
   */
  gmtModified?: number;
  /**
   * @remarks
   * Keyword group ID.
   * 
   * @example
   * 16
   */
  groupId?: number;
  /**
   * @remarks
   * Keyword group name.
   * 
   * @example
   * testGroup
   */
  groupName?: string;
  /**
   * @remarks
   * List of associated policy objects.
   */
  policyInfoList?: ListWordGroupResponseBodyWordGroupInfoListPolicyInfoList[];
  static names(): { [key: string]: string } {
    return {
      gmtModified: 'GmtModified',
      groupId: 'GroupId',
      groupName: 'GroupName',
      policyInfoList: 'PolicyInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gmtModified: 'number',
      groupId: 'number',
      groupName: 'string',
      policyInfoList: { 'type': 'array', 'itemType': ListWordGroupResponseBodyWordGroupInfoListPolicyInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.policyInfoList)) {
      $dara.Model.validateArray(this.policyInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListWordGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code, 00000 indicates success; other values indicate failure.
   * 
   * @example
   * 00000
   */
  code?: string;
  /**
   * @remarks
   * HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * If an error occurs, returns the error message.
   * 
   * @example
   * ""
   */
  message?: string;
  /**
   * @remarks
   * Page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Page size, the maximum number of results returned per page.
   * Maximum limit: 100.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * BE2558EC-A9EA-5276-ADB5-107B09CF3D11
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful: true means the call was successful; false means the call failed.
   * 
   * @example
   * True
   */
  success?: boolean;
  /**
   * @remarks
   * Total count.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * List of keyword group objects.
   */
  wordGroupInfoList?: ListWordGroupResponseBodyWordGroupInfoList[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      success: 'Success',
      totalCount: 'TotalCount',
      wordGroupInfoList: 'WordGroupInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      success: 'boolean',
      totalCount: 'number',
      wordGroupInfoList: { 'type': 'array', 'itemType': ListWordGroupResponseBodyWordGroupInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.wordGroupInfoList)) {
      $dara.Model.validateArray(this.wordGroupInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

