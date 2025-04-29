// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResource } from "./DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResource";


export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResources extends $dara.Model {
  allocatedResource?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResource[];
  static names(): { [key: string]: string } {
    return {
      allocatedResource: 'AllocatedResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      allocatedResource: { 'type': 'array', 'itemType': DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItemAllocatedResourcesAllocatedResource },
    };
  }

  validate() {
    if(Array.isArray(this.allocatedResource)) {
      $dara.Model.validateArray(this.allocatedResource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

