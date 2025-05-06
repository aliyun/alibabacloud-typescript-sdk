// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConvertInstanceShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f-cn-wwo36qj4g06
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  isAutoRenew?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  namespaceResourceSpecsShrink?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  region?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      instanceId: 'InstanceId',
      isAutoRenew: 'IsAutoRenew',
      namespaceResourceSpecsShrink: 'NamespaceResourceSpecs',
      pricingCycle: 'PricingCycle',
      region: 'Region',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      instanceId: 'string',
      isAutoRenew: 'boolean',
      namespaceResourceSpecsShrink: 'string',
      pricingCycle: 'string',
      region: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

