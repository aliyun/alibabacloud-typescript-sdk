// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribePatternTypesResponseBodyPatternTypes extends $dara.Model {
  /**
   * @remarks
   * The number of vCPUs for the instance type.
   * 
   * @example
   * 4
   */
  cores?: number;
  /**
   * @remarks
   * The level of the instance family.
   * 
   * - EntryLevel: Entry-level. This level refers to shared instance types. These instance types are more cost-effective but cannot guarantee stable computing performance. They are suitable for business scenarios with low CPU utilization. For more information, see [Shared instance types](https://help.aliyun.com/document_detail/108489.html).
   * - EnterpriseLevel: Enterprise-level. These instance types provide stable performance and dedicated resources, and are suitable for business scenarios that require high stability. For more information, see [Instance families](https://help.aliyun.com/document_detail/25378.html).
   * - CreditEntryLevel: Credit entry-level. This level refers to burstable instances. These instance types use CPU credits to ensure computing performance and are suitable for business scenarios with low CPU utilization but occasional spikes in CPU usage. For more information, see [Burstable instances](https://help.aliyun.com/document_detail/59977.html).
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
   * The memory size of the instance type. Unit: GiB.
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

