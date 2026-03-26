// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticityAssuranceAutoRenewAttributeResponseBodyElasticityAssuranceRenewAttributesElasticityAssuranceRenewAttribute extends $dara.Model {
  period?: number;
  periodUnit?: string;
  privatePoolOptionsId?: string;
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

export class DescribeElasticityAssuranceAutoRenewAttributeResponseBody extends $dara.Model {
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

