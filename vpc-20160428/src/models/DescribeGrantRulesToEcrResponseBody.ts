// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGrantRulesToEcrResponseBodyEcrGrantRules extends $dara.Model {
  /**
   * @remarks
   * The authorization time. The time follows the ISO8601 standard and uses UTC time. The format is YYYY-MM-DDThh:mm:ssZ.
   * 
   * @example
   * 2025-09-15T14:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ECR account ID.
   * 
   * @example
   * ecr-xxxxxx
   */
  ecrInstanceId?: string;
  /**
   * @remarks
   * The ECR account ID.
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
   * The total number of entries returned.
   * 
   * @example
   * 0
   */
  count?: number;
  /**
   * @remarks
   * The cross-account authorization list of the ECR
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
   * The number of entries on each page. Maximum value: 50. Default value: 10.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C1CCAB91-6AE6-50E3-AAA3-D0E5A2BC6ADE
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
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

