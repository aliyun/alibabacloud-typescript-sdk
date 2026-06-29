// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOrganizationRequest extends $dara.Model {
  /**
   * @remarks
   * The organization description.
   * 
   * @example
   * 新的组织描述
   */
  description?: string;
  /**
   * @remarks
   * The organization name.
   * 
   * @example
   * 新的组织名称
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

