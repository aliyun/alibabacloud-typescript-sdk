// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstanceTypeFamiliesRequest extends $dara.Model {
  /**
   * @remarks
   * The series of the instance family. For more information, see [Overview of instance families](https://help.aliyun.com/document_detail/25378.html). Valid values:
   * 
   * *   ecs-1: Series I, which consists of the earliest and cost-effective instance types
   * *   ecs-2: Series II, which provides upgraded software and hardware and higher performance than Series I
   * *   ecs-3: Series III, which consists of high-performance instance families and is suitable for different business scenarios
   * *   ecs-4: Series IV, which consists of enterprise-level instance families (such as g5, c5, and r5), ECS Bare Metal Instance families (such as ebmc5s, ebmg5s, and ebmr5s), and burstable instance families (such as t5) and can meet a wide variety of business requirements with lower latency
   * *   ecs-5: Series V, which consists of enterprise-level instance families (such as g6, c6, and r6), ECS Bare Metal Instance families (such as ebmg6, ebmg6e, and ebmc6), and storage-enhanced instance families (such as g6e) and delivers quick response times and higher performance
   * *   ecs-6: Series VI, which consists of enterprise-level instance families (such as hfc7, hfg7, and hfr7) and ECS Bare Metal Instance families (such as ebmhfg7)
   * 
   * @example
   * ecs-5
   */
  generation?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the instance family. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      generation: 'Generation',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      generation: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

