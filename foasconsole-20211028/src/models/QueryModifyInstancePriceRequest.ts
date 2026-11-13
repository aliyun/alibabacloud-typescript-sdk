// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryModifyInstancePriceRequestHaResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs for zone-disaster recovery high availability.
   * 
   * @example
   * 20
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size for high availability in zone-disaster recovery.
   * 
   * @example
   * 80
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModifyInstancePriceRequestResourceSpec extends $dara.Model {
  /**
   * @remarks
   * The number of CPUs after the specification change.
   * 
   * This parameter is required.
   * 
   * @example
   * 10
   */
  cpu?: number;
  /**
   * @remarks
   * The memory size after the specification change.
   * 
   * >The memory size must be four times the number of CPUs.
   * 
   * This parameter is required.
   * 
   * @example
   * 40
   */
  memoryGB?: number;
  static names(): { [key: string]: string } {
    return {
      cpu: 'Cpu',
      memoryGB: 'MemoryGB',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cpu: 'number',
      memoryGB: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryModifyInstancePriceRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to select high-availability resources for zone-disaster recovery.
   * 
   * @example
   * true
   */
  ha?: boolean;
  /**
   * @remarks
   * The description of high-availability resources for zone-disaster recovery.
   * 
   * **if can be null:**
   * true
   */
  haResourceSpec?: QueryModifyInstancePriceRequestHaResourceSpec;
  /**
   * @remarks
   * The vSwitch group in the secondary zone for zone-disaster recovery.
   * 
   * **if can be null:**
   * true
   */
  haVSwitchIds?: string[];
  /**
   * @remarks
   * The instance ID of the order.
   * 
   * This parameter is required.
   * 
   * @example
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  /**
   * @remarks
   * The coupon code.
   * 
   * @example
   * 500043499350689
   */
  promotionCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * The resource specifications.
   * 
   * This parameter is required.
   */
  resourceSpec?: QueryModifyInstancePriceRequestResourceSpec;
  /**
   * @remarks
   * Specifies whether to use a coupon. Valid values:
   * - true: Yes.
   * - false: No.
   */
  usePromotionCode?: boolean;
  static names(): { [key: string]: string } {
    return {
      ha: 'Ha',
      haResourceSpec: 'HaResourceSpec',
      haVSwitchIds: 'HaVSwitchIds',
      instanceId: 'InstanceId',
      promotionCode: 'PromotionCode',
      region: 'Region',
      resourceSpec: 'ResourceSpec',
      usePromotionCode: 'UsePromotionCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ha: 'boolean',
      haResourceSpec: QueryModifyInstancePriceRequestHaResourceSpec,
      haVSwitchIds: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
      promotionCode: 'string',
      region: 'string',
      resourceSpec: QueryModifyInstancePriceRequestResourceSpec,
      usePromotionCode: 'boolean',
    };
  }

  validate() {
    if(this.haResourceSpec && typeof (this.haResourceSpec as any).validate === 'function') {
      (this.haResourceSpec as any).validate();
    }
    if(Array.isArray(this.haVSwitchIds)) {
      $dara.Model.validateArray(this.haVSwitchIds);
    }
    if(this.resourceSpec && typeof (this.resourceSpec as any).validate === 'function') {
      (this.resourceSpec as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

