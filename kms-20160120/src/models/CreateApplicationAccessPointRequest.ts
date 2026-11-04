// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication method. Only ClientKey is supported.
   * 
   * @example
   * ClientKey
   */
  authenticationMethod?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * aap description
   */
  description?: string;
  /**
   * @remarks
   * The name of the application access point (AAP).
   * 
   * This parameter is required.
   * 
   * @example
   * aap_test
   */
  name?: string;
  /**
   * @remarks
   * The attached access policies.
   * 
   * > You can attach up to three access policies to each application access point (AAP).
   * 
   * This parameter is required.
   * 
   * @example
   * ["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]
   */
  policies?: string;
  static names(): { [key: string]: string } {
    return {
      authenticationMethod: 'AuthenticationMethod',
      description: 'Description',
      name: 'Name',
      policies: 'Policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authenticationMethod: 'string',
      description: 'string',
      name: 'string',
      policies: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

