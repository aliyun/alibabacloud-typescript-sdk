// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UserVpc } from "./UserVpc";


export class UpdateResourceGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The description of the resource group.
   * 
   * @example
   * test_new_havpn_tf
   */
  description?: string;
  /**
   * @remarks
   * The name of the resource group.
   * 
   * @example
   * prophet
   */
  name?: string;
  /**
   * @remarks
   * Whether to detach the resource group from the currently connected VPC.
   * 
   * @example
   * true
   */
  unbind?: boolean;
  /**
   * @remarks
   * Information about the VPC connected to the resource group.
   */
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

