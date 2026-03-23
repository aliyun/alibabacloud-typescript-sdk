// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetCreateRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the configuration set. The description can be up to 50 characters long.
   * 
   * @example
   * XXX
   */
  description?: string;
  /**
   * @remarks
   * The ID of the associated IP pool. This parameter is optional.
   * 
   * @example
   * XXX
   */
  ipPoolId?: string;
  /**
   * @remarks
   * The name of the configuration set. This parameter is required. The name must be unique and can be up to 50 characters long.
   * 
   * @example
   * XXX
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      ipPoolId: 'IpPoolId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      ipPoolId: 'string',
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

