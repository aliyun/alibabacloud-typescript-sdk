// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPlansResponseBodyPlansTags extends $dara.Model {
  /**
   * @remarks
   * The Chinese title.
   * 
   * @example
   * BGP
   */
  cnTitle?: string;
  /**
   * @remarks
   * The color.
   * 
   * @example
   * grey
   */
  color?: string;
  /**
   * @remarks
   * The English title.
   * 
   * @example
   * BGP
   */
  enTitle?: string;
  static names(): { [key: string]: string } {
    return {
      cnTitle: 'CnTitle',
      color: 'Color',
      enTitle: 'EnTitle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cnTitle: 'string',
      color: 'string',
      enTitle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlansResponseBodyPlans extends $dara.Model {
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
   * The number of vCPUs.
   * 
   * @example
   * 2
   */
  core?: number;
  /**
   * @remarks
   * The number of credits.
   * 
   * @example
   * 12500
   */
  credits?: number;
  /**
   * @remarks
   * The currency unit. Valid values:
   * 
   * - CNY: Chinese Yuan.
   * 
   * - USD: US Dollar.
   * 
   * > The currency unit is CNY on the China site and USD on the international site.
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
   * - ESSD: Enterprise SSD (ESSD) at performance level (PL) 0.
   * - SSD: standard SSD.
   * - CLOUD_EFFICIENCY: ultra cloud disk.
   * 
   * @example
   * ESSD
   */
  diskType?: string;
  /**
   * @remarks
   * The monthly data transfer quota. Unit: GB.
   * 
   * @example
   * 400
   */
  flow?: number;
  /**
   * @remarks
   * The public network line type. Valid values:
   * - **BGP** (default): BGP line.
   * - **BGP_NCO**: BGP (outside the Chinese mainland optimized) line.
   * 
   * @example
   * BGP
   */
  ispType?: string;
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
   * The monthly price of the simple application server plan.
   * 
   * @example
   * 60
   */
  originPrice?: string;
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
   * The plan type. Valid values:
   * 
   * - NORMAL: general-purpose.
   * - CAPACITY: storage-optimized.
   * - PREVIOUS: previous generation.
   * - MULTI_IP: multiple public IP addresses.
   * - INTERNATIONAL: international.
   * 
   * > For more information, see [Instance families](https://help.aliyun.com/document_detail/2861773.html).
   * 
   * @example
   * NORMAL
   */
  planType?: string;
  /**
   * @remarks
   * The number of public IP addresses.
   * 
   * @example
   * 1
   */
  publicIpNum?: string;
  /**
   * @remarks
   * The operating system type supported by the plan.
   * 
   * @example
   * ["Linux","Windows"]
   */
  supportPlatform?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: ListPlansResponseBodyPlansTags[];
  /**
   * @remarks
   * The number of tokens.
   * 
   * @example
   * 300
   */
  tokens?: number;
  static names(): { [key: string]: string } {
    return {
      bandwidth: 'Bandwidth',
      core: 'Core',
      credits: 'Credits',
      currency: 'Currency',
      diskSize: 'DiskSize',
      diskType: 'DiskType',
      flow: 'Flow',
      ispType: 'IspType',
      memory: 'Memory',
      originPrice: 'OriginPrice',
      planId: 'PlanId',
      planType: 'PlanType',
      publicIpNum: 'PublicIpNum',
      supportPlatform: 'SupportPlatform',
      tags: 'Tags',
      tokens: 'Tokens',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bandwidth: 'number',
      core: 'number',
      credits: 'number',
      currency: 'string',
      diskSize: 'number',
      diskType: 'string',
      flow: 'number',
      ispType: 'string',
      memory: 'number',
      originPrice: 'string',
      planId: 'string',
      planType: 'string',
      publicIpNum: 'string',
      supportPlatform: 'string',
      tags: { 'type': 'array', 'itemType': ListPlansResponseBodyPlansTags },
      tokens: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The plan information.
   */
  plans?: ListPlansResponseBodyPlans[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 20758A-585D-4A41-A9B2-28DA8F4F534F
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
      plans: { 'type': 'array', 'itemType': ListPlansResponseBodyPlans },
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

