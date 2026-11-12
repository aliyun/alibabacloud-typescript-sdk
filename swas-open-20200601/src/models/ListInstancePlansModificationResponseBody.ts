// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstancePlansModificationResponseBodyPlans extends $dara.Model {
  /**
   * @remarks
   * The peak bandwidth. Unit: Mbps.
   * 
   * @example
   * 200
   */
  bandwidth?: number;
  /**
   * @remarks
   * The number of vCPU cores.
   * 
   * @example
   * 2
   */
  core?: number;
  /**
   * @remarks
   * The unit of the price. Valid values:
   * 
   * - CNY: Chinese Yuan
   * 
   * - USD: US Dollar
   * 
   * @example
   * CNY
   */
  currency?: string;
  /**
   * @remarks
   * The disk capacity. Unit: GiB.
   * 
   * @example
   * 40
   */
  diskSize?: number;
  /**
   * @remarks
   * The disk type. Valid values:
   * 
   * - SSD: a standard SSD.
   * 
   * - ESSD: an Enhanced SSD (ESSD) at performance level (PL) 0.
   * 
   * - CLOUD_EFFICIENCY: an ultra disk.
   * 
   * @example
   * ESSD
   */
  diskType?: string;
  /**
   * @remarks
   * The monthly traffic. Unit: GB.
   * 
   * @example
   * 400
   */
  flow?: number;
  /**
   * @remarks
   * The memory size. Unit: GiB.
   * 
   * @example
   * 1
   */
  memory?: number;
  /**
   * @remarks
   * The price of the plan.
   * 
   * @example
   * 60
   */
  originPrice?: number;
  /**
   * @remarks
   * The plan ID.
   * 
   * @example
   * swas.s2.c2m1s40b3t04
   */
  planId?: string;
  /**
   * @remarks
   * The operating systems supported by the plan.
   * 
   * @example
   * ["Linux","Windows"]
   */
  supportPlatform?: string;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      core: 'Core',
      currency: 'Currency',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      flow: 'Flow',
      memory: 'Memory',
      originPrice: 'OriginPrice',
      planId: 'PlanId',
      supportPlatform: 'SupportPlatform',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      core: 'number',
      currency: 'string',
      diskSize: 'number',
      diskType: 'string',
      flow: 'number',
      memory: 'number',
      originPrice: 'number',
      planId: 'string',
      supportPlatform: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstancePlansModificationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The array of plans.
   */
  plans?: ListInstancePlansModificationResponseBodyPlans[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      plans: 'Plans',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      plans: { 'type': 'array', 'itemType': ListInstancePlansModificationResponseBodyPlans },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.plans)) {
      $dara.Model.validateArray(this.plans);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

