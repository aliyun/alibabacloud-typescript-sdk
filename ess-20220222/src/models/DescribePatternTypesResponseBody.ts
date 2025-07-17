// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePatternTypesResponseBodyPatternTypes extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs that are assigned to the instance type.
   * 
   * @example
   * 4
   */
  cores?: number;
  /**
   * @remarks
   * The level of the instance family.
   * 
   * *   EntryLevel: entry level (shared instance types) Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for business scenarios in which the CPU utilization is low. For more information, see [Shared instance families](https://help.aliyun.com/document_detail/108489.html).
   * *   EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for scenarios that require high stability. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html).
   * *   CreditEntryLevel: credit-based entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for scenarios in which the CPU utilization is low but may fluctuate in specific cases. For more information, see [Overview of burstable instances](https://help.aliyun.com/document_detail/59977.html).
   * 
   * @example
   * EnterpriseLevel
   */
  instanceFamilyLevel?: string;
  /**
   * @remarks
   * The name of the instance type.
   * 
   * @example
   * ecs.c7.xlarge
   */
  instanceType?: string;
  /**
   * @remarks
   * The instance family.
   * 
   * @example
   * ecs.c7
   */
  instanceTypeFamily?: string;
  /**
   * @remarks
   * The memory size that are assigned to the instance type. Unit: GiB.
   * 
   * @example
   * 8
   */
  memory?: number;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      instanceFamilyLevel: 'InstanceFamilyLevel',
      instanceType: 'InstanceType',
      instanceTypeFamily: 'InstanceTypeFamily',
      memory: 'Memory',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'number',
      instanceFamilyLevel: 'string',
      instanceType: 'string',
      instanceTypeFamily: 'string',
      memory: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribePatternTypesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance types that meet the specified requirements.
   */
  patternTypes?: DescribePatternTypesResponseBodyPatternTypes[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      patternTypes: 'PatternTypes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      patternTypes: { 'type': 'array', 'itemType': DescribePatternTypesResponseBodyPatternTypes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.patternTypes)) {
      $dara.Model.validateArray(this.patternTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

