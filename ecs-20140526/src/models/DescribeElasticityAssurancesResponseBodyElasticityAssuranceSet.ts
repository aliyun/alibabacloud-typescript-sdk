// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItem } from "./DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItem";


export class DescribeElasticityAssurancesResponseBodyElasticityAssuranceSet extends $dara.Model {
  elasticityAssuranceItem?: DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItem[];
  static names(): { [key: string]: string } {
    return {
      elasticityAssuranceItem: 'ElasticityAssuranceItem',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticityAssuranceItem: { 'type': 'array', 'itemType': DescribeElasticityAssurancesResponseBodyElasticityAssuranceSetElasticityAssuranceItem },
    };
  }

  validate() {
    if(Array.isArray(this.elasticityAssuranceItem)) {
      $dara.Model.validateArray(this.elasticityAssuranceItem);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

