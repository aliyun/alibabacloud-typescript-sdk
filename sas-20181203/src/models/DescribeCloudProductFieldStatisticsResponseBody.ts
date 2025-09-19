// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCloudProductFieldStatisticsResponseBodyGroupedFields extends $dara.Model {
  /**
   * @remarks
   * The statistics of different types of assets. **MachineType** indicates the type of the asset. **Count** indicates the number of assets of a specific type.
   * 
   * Valid values of **MachineType**:
   * 
   * *   **1**: Server Load Balancer (SLB) instance
   * *   **2**: NAT gateway instance
   * *   **3**: ApsaraDB RDS instance
   * *   **4**: ApsaraDB for MongoDB instance
   * 
   * @example
   * [{"MachineType":1,"Count":11}]
   */
  categoryCount?: string;
  /**
   * @remarks
   * The total number of cloud services that are protected by Security Center.
   * 
   * @example
   * 100
   */
  instanceCount?: number;
  /**
   * @remarks
   * The number of cloud services that are at risk.
   * 
   * @example
   * 90
   */
  riskInstanceCount?: number;
  static names(): { [key: string]: string } {
    return {
      categoryCount: 'CategoryCount',
      instanceCount: 'InstanceCount',
      riskInstanceCount: 'RiskInstanceCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryCount: 'string',
      instanceCount: 'number',
      riskInstanceCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCloudProductFieldStatisticsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The statistics of cloud services that are protected by Security Center.
   */
  groupedFields?: DescribeCloudProductFieldStatisticsResponseBodyGroupedFields;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      groupedFields: 'GroupedFields',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupedFields: DescribeCloudProductFieldStatisticsResponseBodyGroupedFields,
      requestId: 'string',
    };
  }

  validate() {
    if(this.groupedFields && typeof (this.groupedFields as any).validate === 'function') {
      (this.groupedFields as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

