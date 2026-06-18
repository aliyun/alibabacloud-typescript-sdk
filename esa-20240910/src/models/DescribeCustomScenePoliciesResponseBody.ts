// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomScenePoliciesResponseBodyDataModule extends $dara.Model {
  /**
   * @remarks
   * The end time of the policy.
   * 
   * The time is in UTC and follows the ISO 8601 standard. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-03-06T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the custom scene policy.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * A list of associated site IDs.
   * 
   * > This field is deprecated. We recommend that you use the `SiteIds` field instead.
   */
  objects?: string[];
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 1234****
   */
  policyId?: number;
  /**
   * @remarks
   * A comma-separated list of site IDs associated with the policy.
   * 
   * @example
   * 123456****,123457****
   */
  siteIds?: string;
  /**
   * @remarks
   * The start time of the policy.
   * 
   * The time is in UTC and follows the ISO 8601 standard. Format: yyyy-MM-ddTHH:mm:ssZ.
   * 
   * @example
   * 2023-03-04T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The effective status of the policy. Valid values:
   * 
   * - **disabled**: The policy is disabled.
   * 
   * - **pending**: The policy is waiting to take effect.
   * 
   * - **running**: The policy is in effect.
   * 
   * - **expired**: The policy has expired.
   * 
   * @example
   * Expired
   */
  status?: string;
  /**
   * @remarks
   * The template name. Valid value:
   * 
   * - **promotion**: A major event.
   * 
   * @example
   * promotion
   */
  template?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      name: 'Name',
      objects: 'Objects',
      policyId: 'PolicyId',
      siteIds: 'SiteIds',
      startTime: 'StartTime',
      status: 'Status',
      template: 'Template',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      name: 'string',
      objects: { 'type': 'array', 'itemType': 'string' },
      policyId: 'number',
      siteIds: 'string',
      startTime: 'string',
      status: 'string',
      template: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.objects)) {
      $dara.Model.validateArray(this.objects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCustomScenePoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of custom scene policies.
   */
  dataModule?: DescribeCustomScenePoliciesResponseBodyDataModule[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries on the current page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The maximum number of policies that you can create.
   * 
   * @example
   * 10
   */
  quota?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 85H66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      dataModule: 'DataModule',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      quota: 'Quota',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataModule: { 'type': 'array', 'itemType': DescribeCustomScenePoliciesResponseBodyDataModule },
      pageNumber: 'number',
      pageSize: 'number',
      quota: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dataModule)) {
      $dara.Model.validateArray(this.dataModule);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

