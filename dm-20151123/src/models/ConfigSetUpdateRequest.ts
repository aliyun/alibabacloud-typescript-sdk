// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ConfigSetUpdateRequest extends $dara.Model {
  /**
   * @example
   * XXX
   */
  description?: string;
  /**
   * @example
   * XXX
   */
  id?: string;
  /**
   * @example
   * XXX
   */
  ipPoolId?: string;
  /**
   * @example
   * XXX
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      ipPoolId: 'IpPoolId',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
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

