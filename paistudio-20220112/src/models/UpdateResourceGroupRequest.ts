// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserVpc } from "./UserVpc";


export class UpdateResourceGroupRequest extends $dara.Model {
  /**
   * @example
   * test_new_havpn_tf
   */
  description?: string;
  /**
   * @example
   * prophet
   */
  name?: string;
  /**
   * @example
   * true
   */
  unbind?: boolean;
  userVpc?: UserVpc;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      unbind: 'Unbind',
      userVpc: 'UserVpc',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      unbind: 'boolean',
      userVpc: UserVpc,
    };
  }

  validate() {
    if(this.userVpc && typeof (this.userVpc as any).validate === 'function') {
      (this.userVpc as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

