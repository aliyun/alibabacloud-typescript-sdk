// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeElasticityAssuranceAutoRenewAttributeResponseBodyElasticityAssuranceRenewAttributes } from "./DescribeElasticityAssuranceAutoRenewAttributeResponseBodyElasticityAssuranceRenewAttributes";


export class DescribeElasticityAssuranceAutoRenewAttributeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The auto-renewal attribute of the elasticity assurances.
   */
  elasticityAssuranceRenewAttributes?: DescribeElasticityAssuranceAutoRenewAttributeResponseBodyElasticityAssuranceRenewAttributes;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      elasticityAssuranceRenewAttributes: 'ElasticityAssuranceRenewAttributes',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elasticityAssuranceRenewAttributes: DescribeElasticityAssuranceAutoRenewAttributeResponseBodyElasticityAssuranceRenewAttributes,
      requestId: 'string',
    };
  }

  validate() {
    if(this.elasticityAssuranceRenewAttributes && typeof (this.elasticityAssuranceRenewAttributes as any).validate === 'function') {
      (this.elasticityAssuranceRenewAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

