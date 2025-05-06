// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryModifyInstancePriceRequestHaResourceSpec } from "./QueryModifyInstancePriceRequestHaResourceSpec";
import { QueryModifyInstancePriceRequestResourceSpec } from "./QueryModifyInstancePriceRequestResourceSpec";


export class QueryModifyInstancePriceRequest extends $dara.Model {
  ha?: boolean;
  /**
   * **if can be null:**
   * true
   */
  haResourceSpec?: QueryModifyInstancePriceRequestHaResourceSpec;
  /**
   * **if can be null:**
   * true
   */
  haVSwitchIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  promotionCode?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  resourceSpec?: QueryModifyInstancePriceRequestResourceSpec;
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

