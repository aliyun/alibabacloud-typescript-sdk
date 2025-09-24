// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateResourcePackageRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource plan.
   * 
   * This parameter is required.
   * 
   * @example
   * 6
   */
  duration?: number;
  /**
   * @remarks
   * The data returned.
   * 
   * @example
   * 2020-03-03T12:00:00Z
   */
  effectiveDate?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the order.
   * 
   * This parameter is required.
   * 
   * @example
   * FPT_ossbag_absolute_Storage_sh
   */
  packageType?: string;
  /**
   * @example
   * Month
   */
  pricingCycle?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * This parameter is required.
   * 
   * @example
   * ossbag
   */
  productCode?: string;
  /**
   * @remarks
   * The ID of the order.
   * 
   * This parameter is required.
   * 
   * @example
   * 40
   */
  specification?: string;
  static names(): { [key: string]: string } {
    return {
      duration: 'Duration',
      effectiveDate: 'EffectiveDate',
      ownerId: 'OwnerId',
      packageType: 'PackageType',
      pricingCycle: 'PricingCycle',
      productCode: 'ProductCode',
      specification: 'Specification',
    };
  }

  static types(): { [key: string]: any } {
    return {
      duration: 'number',
      effectiveDate: 'string',
      ownerId: 'number',
      packageType: 'string',
      pricingCycle: 'string',
      productCode: 'string',
      specification: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

