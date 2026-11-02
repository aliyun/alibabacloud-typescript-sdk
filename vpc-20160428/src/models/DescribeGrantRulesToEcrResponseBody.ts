// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantRulesToEcrResponseBodyEcrGrantRules extends $dara.Model {
  /**
   * @remarks
   * The time when the authorization was granted. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2025-09-15T14:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The instance ID of the Express Connect Router (ECR) for which cross-account authorization is granted.
   * 
   * @example
   * ecr-xxxxxx
   */
  ecrInstanceId?: string;
  /**
   * @remarks
   * The ID of the authorized user for the Express Connect Router (ECR) cross-account authorization.
   * 
   * @example
   * 11111111111
   */
  ecrUid?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      ecrInstanceId: 'EcrInstanceId',
      ecrUid: 'EcrUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      ecrInstanceId: 'string',
      ecrUid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeGrantRulesToEcrResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of queried results.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The cross-account authorization list of the Express Connect Router (ECR).
   */
  ecrGrantRules?: DescribeGrantRulesToEcrResponseBodyEcrGrantRules[];
  /**
   * @remarks
   * The page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page during paging in a paged query. Maximum value: 50. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C1CCAB91-6AE6-50E3-AAA3-D0E5A2BC6ADE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 0
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      ecrGrantRules: 'EcrGrantRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      ecrGrantRules: { 'type': 'array', 'itemType': DescribeGrantRulesToEcrResponseBodyEcrGrantRules },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.ecrGrantRules)) {
      $dara.Model.validateArray(this.ecrGrantRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

