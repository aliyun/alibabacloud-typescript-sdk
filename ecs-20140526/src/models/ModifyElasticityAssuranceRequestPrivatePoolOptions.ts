// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyElasticityAssuranceRequestPrivatePoolOptions extends $dara.Model {
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
  /**
   * @remarks
   * The name of the elasticity assurance. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain digits, colons (:), underscores (_), and hyphens (-).
   * 
   * @example
   * eapTestName
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

