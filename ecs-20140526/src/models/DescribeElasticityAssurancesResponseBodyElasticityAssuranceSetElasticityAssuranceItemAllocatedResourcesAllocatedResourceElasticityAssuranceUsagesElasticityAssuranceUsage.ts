// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsagesElasticityAssuranceUsage extends $dara.Model {
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 1144775968548340
   */
  accountId?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * name
   */
  serviceName?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * 1
   */
  usedAmount?: number;
  static names(): { [key: string]: string } {
    return {
      accountId: 'AccountId',
      serviceName: 'ServiceName',
      usedAmount: 'UsedAmount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountId: 'string',
      serviceName: 'string',
      usedAmount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

