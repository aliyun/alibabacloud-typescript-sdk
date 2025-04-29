// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticityAssurancesRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The IDs of the elasticity assurances. The value can be a JSON array that consists of up to 100 elasticity assurance IDs. Separate the IDs with commas (,).
   * 
   * @example
   * ["eap-bp67acfmxazb4****", "eap-bp67acfmxazb5****"]
   */
  ids?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

