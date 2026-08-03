// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGovernanceMetricsResponseBodyDataGovernanceMetrics extends $dara.Model {
  /**
   * @remarks
   * The details of the resource.
   * 
   * This parameter contains the detailed configurations of all compliant resources for the governance item. This parameter is returned only if a resource instance exists.
   * 
   * @example
   * {
   *     "trailName": "trail-test",
   *     "homeRegion": "cn-hangzhou",
   *     "trailRegion": "All",
   *     "trailStatus": "Enable",
   *     "eventRW": "All",
   *     "isOrganizationTrail": false,
   *     "ossDeliveryStatus": "normal",
   *     "deliveryObjectLifeCycle": "999",
   *     "ossBucketLifeCycle": "999",
   *     "trailTotal": 100
   * }
   */
  columnsSchema?: string;
  /**
   * @remarks
   * The governance item. This indicates a specific category of compliance check.
   * 
   * @example
   * actiontrail_storage_audit_log
   */
  governanceItem?: string;
  /**
   * @remarks
   * The compliance score for the governance item.
   * 
   * Valid values: 0 to 100.
   * 
   * @example
   * 100
   */
  governanceScore?: string;
  static names(): { [key: string]: string } {
    return {
      columnsSchema: 'ColumnsSchema',
      governanceItem: 'GovernanceItem',
      governanceScore: 'GovernanceScore',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columnsSchema: 'string',
      governanceItem: 'string',
      governanceScore: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGovernanceMetricsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * @example
   * 195622768501****
   */
  accountId?: string;
  /**
   * @remarks
   * A collection of governance items that contain multiple compliance assessment dimensions.
   */
  governanceMetrics?: GetGovernanceMetricsResponseBodyDataGovernanceMetrics[];
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      governanceMetrics: 'GovernanceMetrics',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      governanceMetrics: { 'type': 'array', 'itemType': GetGovernanceMetricsResponseBodyDataGovernanceMetrics },
    };
  }

  validate() {
    if(Array.isArray(this.governanceMetrics)) {
      $dara.Model.validateArray(this.governanceMetrics);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetGovernanceMetricsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetGovernanceMetricsResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 145318BE-DEE1-4C57-AA7C-5BE7D34A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetGovernanceMetricsResponseBodyData,
      requestId: 'string',
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

