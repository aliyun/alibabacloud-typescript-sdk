// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticityAssuranceAutoRenewAttributeResponseBodyElasticityAssuranceRenewAttributesElasticityAssuranceRenewAttribute extends $dara.Model {
  /**
   * @remarks
   * The auto-renewal period. Valid values: Valid values: 1, 2, 3, 6, 12, 24, and 36.
   * 
   * @example
   * 1
   */
  period?: number;
  /**
   * @remarks
   * The unit of the auto-renewal period. Valid values:
   * 
   * *   Month (default)
   * *   Year
   * 
   * @example
   * Month
   */
  periodUnit?: string;
  /**
   * @remarks
   * The ID of the elasticity assurance.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  privatePoolOptionsId?: string;
  /**
   * @remarks
   * Indicates whether auto-renewal is enabled for the elasticity assurance. Valid values:
   * 
   * *   AutoRenewal: Auto-renewal is enabled for the elasticity assurance.
   * *   Normal: Auto-renewal is disabled for the elasticity assurance.
   * *   NotRenewal: The elasticity assurance is not renewed.
   * 
   * @example
   * Normal
   */
  renewalStatus?: string;
  static names(): { [key: string]: string } {
    return {
      period: 'Period',
      periodUnit: 'PeriodUnit',
      privatePoolOptionsId: 'PrivatePoolOptionsId',
      renewalStatus: 'RenewalStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      period: 'number',
      periodUnit: 'string',
      privatePoolOptionsId: 'string',
      renewalStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

