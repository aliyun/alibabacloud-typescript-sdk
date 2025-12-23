// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaReviewTasksResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The application ID.
   * 
   * @example
   * 120123456
   */
  appGroupId?: number;
  /**
   * @remarks
   * The application name.
   * 
   * @example
   * "td_test_os"
   */
  appGroupName?: string;
  /**
   * @remarks
   * The application type.
   * 
   * @example
   * "standard"
   */
  appGroupType?: string;
  /**
   * @remarks
   * Indicates whether the ticket is approved.
   * 
   * @example
   * true
   */
  approved?: boolean;
  /**
   * @remarks
   * Indicates whether the application is available.
   * 
   * @example
   * true
   */
  available?: boolean;
  /**
   * @remarks
   * The time when the ticket was created.
   * 
   * @example
   * "2020-04-08T08:29:45+0000"
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the ticket was last updated.
   * 
   * @example
   * "2020-04-08T08:36:36+0000"
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ticket ID.
   * 
   * @example
   * 142
   */
  id?: number;
  /**
   * @remarks
   * The remarks.
   * 
   * @example
   * null
   */
  memo?: string;
  /**
   * @remarks
   * The computing resource quota that is applied for.
   * 
   * @example
   * 6000
   */
  newComputeResource?: number;
  /**
   * @remarks
   * The storage capacity quota that is applied for.
   * 
   * @example
   * 1100
   */
  newSocSize?: number;
  /**
   * @remarks
   * The application specifications that are applied for.
   * 
   * @example
   * "opensearch.private.common"
   */
  newSpec?: string;
  /**
   * @remarks
   * The original quota of computing resources.
   * 
   * @example
   * 500
   */
  oldComputeResource?: number;
  /**
   * @remarks
   * The original quota of storage capacity.
   * 
   * @example
   * 900
   */
  oldDocSize?: number;
  /**
   * @remarks
   * The original specifications of the application.
   * 
   * @example
   * "opensearch.private.common"
   */
  oldSpec?: string;
  /**
   * @remarks
   * Indicates whether the ticket is pending.
   * 
   * @example
   * false
   */
  pending?: boolean;
  static names(): { [key: string]: string } {
    return {
      appGroupId: 'appGroupId',
      appGroupName: 'appGroupName',
      appGroupType: 'appGroupType',
      approved: 'approved',
      available: 'available',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      id: 'id',
      memo: 'memo',
      newComputeResource: 'newComputeResource',
      newSocSize: 'newSocSize',
      newSpec: 'newSpec',
      oldComputeResource: 'oldComputeResource',
      oldDocSize: 'oldDocSize',
      oldSpec: 'oldSpec',
      pending: 'pending',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appGroupId: 'number',
      appGroupName: 'string',
      appGroupType: 'string',
      approved: 'boolean',
      available: 'boolean',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      memo: 'string',
      newComputeResource: 'number',
      newSocSize: 'number',
      newSpec: 'string',
      oldComputeResource: 'number',
      oldDocSize: 'number',
      oldSpec: 'string',
      pending: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaReviewTasksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * "3351A21F-705B-508C-9450-DA65A681547F"
   */
  requestId?: string;
  /**
   * @remarks
   * The information about the tickets. For more information, see [QuotaReviewTask](https://help.aliyun.com/document_detail/173609.html).
   * 
   * @example
   * []
   */
  result?: ListQuotaReviewTasksResponseBodyResult[];
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 500
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': ListQuotaReviewTasksResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

