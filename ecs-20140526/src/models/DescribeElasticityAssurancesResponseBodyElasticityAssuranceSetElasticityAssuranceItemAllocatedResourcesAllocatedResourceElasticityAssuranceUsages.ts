// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsagesElasticityAssuranceUsage } from "./DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsagesElasticityAssuranceUsage";


export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsages extends $dara.Model {
  elasticityAssuranceUsage?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsagesElasticityAssuranceUsage[];
  static names(): { [key: string]: string } {
    return {
      elasticityAssuranceUsage: 'ElasticityAssuranceUsage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticityAssuranceUsage: { 'type': 'array', 'itemType': DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResourceElasticityAssuranceUsagesElasticityAssuranceUsage },
    };
  }

  validate() {
    if(Array.isArray(this.elasticityAssuranceUsage)) {
      $dara.Model.validateArray(this.elasticityAssuranceUsage);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

