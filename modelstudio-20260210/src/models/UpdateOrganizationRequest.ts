// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOrganizationRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the organization.
   * 
   * @example
   * New organization description
   */
  description?: string;
  /**
   * @remarks
   * The name of the organization.
   * 
   * @example
   * New organization name
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
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

