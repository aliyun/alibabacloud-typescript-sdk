// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateApplicationAccessPointRequest extends $dara.Model {
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
   * The name of the AAP that you want to update.
   * 
   * This parameter is required.
   * 
   * @example
   * aap_test
   */
  name?: string;
  /**
   * @remarks
   * The permission policy that you want to update.
   * > You can associate up to three permission policies with each AAP.
   * 
   * @example
   * ["kst-hzz62ee817bvyyr5x****.efkd","kst-hzz62ee817bvyyr5x****.eyyp"]
   */
  policies?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      policies: 'Policies',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

