// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticityAssuranceAutoRenewAttributeResponseBodyElasticityAssuranceRenewAttributesElasticityAssuranceRenewAttribute } from "./DescribeElasticityAssuranceAutoRenewAttributeResponseBodyElasticityAssuranceRenewAttributesElasticityAssuranceRenewAttribute";


export class DescribeElasticityAssuranceAutoRenewAttributeResponseBodyElasticityAssuranceRenewAttributes extends $dara.Model {
  elasticityAssuranceRenewAttribute?: DescribeElasticityAssuranceAutoRenewAttributeResponseBodyElasticityAssuranceRenewAttributesElasticityAssuranceRenewAttribute[];
  static names(): { [key: string]: string } {
    return {
      elasticityAssuranceRenewAttribute: 'ElasticityAssuranceRenewAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticityAssuranceRenewAttribute: { 'type': 'array', 'itemType': DescribeElasticityAssuranceAutoRenewAttributeResponseBodyElasticityAssuranceRenewAttributesElasticityAssuranceRenewAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.elasticityAssuranceRenewAttribute)) {
      $dara.Model.validateArray(this.elasticityAssuranceRenewAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

