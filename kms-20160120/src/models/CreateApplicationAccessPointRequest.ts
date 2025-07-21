// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateApplicationAccessPointRequest extends $dara.Model {
  /**
   * @remarks
   * The authentication method. Currently, only ClientKey is supported.
   * 
   * @example
   * ClientKey
   */
  authenticationMethod?: string;
  /**
   * @remarks
   * The description of the AAP.
   * 
   * @example
   * aap description
   */
  description?: string;
  /**
   * @remarks
   * The name of the AAP.
   * 
   * This parameter is required.
   * 
   * @example
   * aap_test
   */
  name?: string;
  /**
   * @remarks
   * The permission policy.
   * 
   * > You can bind up to three permission policies to each AAP.
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

