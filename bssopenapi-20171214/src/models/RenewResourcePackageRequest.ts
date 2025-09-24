// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RenewResourcePackageRequest extends $dara.Model {
  /**
   * @remarks
   * The renewal period of the resource plan.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  duration?: number;
  /**
   * @remarks
   * The time when the resource plan takes effect. If you leave this parameter empty, the resource plan immediately takes effect by default.
   * 
   * Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * @example
   * 2020-02-02T12:00:00Z
   */
  effectiveDate?: string;
  /**
   * @remarks
   * The ID of the resource plan.
   * 
   * This parameter is required.
   * 
   * @example
   * lskd****sljhsdj
   */
  instanceId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The unit of the validity period for the resource plan. Valid values:
   * 
   * *   Month
   * *   Year
   * 
   * Default value: Month.
   * 
   * This parameter is required.
   * 
   * @example
   * Month
   */
  pricingCycle?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      effectiveDate: 'EffectiveDate',
      instanceId: 'InstanceId',
      ownerId: 'OwnerId',
      pricingCycle: 'PricingCycle',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      effectiveDate: 'string',
      instanceId: 'string',
      ownerId: 'number',
      pricingCycle: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

