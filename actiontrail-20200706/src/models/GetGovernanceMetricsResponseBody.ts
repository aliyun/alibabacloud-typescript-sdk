// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGovernanceMetricsResponseBodyDataGovernanceMetrics extends $dara.Model {
  /**
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
   * @example
   * actiontrail_storage_audit_log
   */
  governanceItem?: string;
  /**
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
   * @example
   * 195622768501****
   */
  accountId?: string;
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
  data?: GetGovernanceMetricsResponseBodyData;
  /**
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

