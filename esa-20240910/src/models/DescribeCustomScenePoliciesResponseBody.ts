// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCustomScenePoliciesResponseBodyDataModule extends $dara.Model {
  /**
   * @remarks
   * The end time of the policy validity period.
   * 
   * The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2023-03-06T16:00:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The name of the scenario-specific policy.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The list of associated site IDs.
   * 
   * > **[Deprecated]** Read the SiteIds field instead.
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
   * The associated site IDs. Multiple site IDs are separated by commas (,).
   * 
   * @example
   * 123456****,123457****
   */
  siteIds?: string;
  /**
   * @remarks
   * The start time of the policy validity period.
   * 
   * The time is displayed in UTC and follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2023-03-04T16:00:00Z
   */
  startTime?: string;
  /**
   * @remarks
   * The effective status of the policy. Valid values:
   * - **Disabled**: Disabled.
   * - **Pending**: Pending.
   * - **Running**: Running.
   * - **Expired**: Expired.
   * 
   * @example
   * Expired
   */
  status?: string;
  /**
   * @remarks
   * The template name. Valid values:
   * - **promotion**: Important Activity.
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
   * The list of configurations for scenario-specific policies.
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
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The configuration quota.
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
   * The total number of returned entries.
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

