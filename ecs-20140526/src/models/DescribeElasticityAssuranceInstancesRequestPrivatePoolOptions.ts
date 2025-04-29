// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeElasticityAssuranceInstancesRequestPrivatePoolOptions extends $dara.Model {
  /**
   * @remarks
   * The ID of the elasticity assurance.
   * 
   * This parameter is required.
   * 
   * @example
   * eap-bp67acfmxazb4****
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

