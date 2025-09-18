// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAccessControlListRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of public network access control
   * 
   * @example
   * acl-123xxx
   */
  aclId?: string;
  /**
   * @remarks
   * The CIDR blocks.
   * 
   * @example
   * 192.168.1.0/24,172.16.0.0/16
   */
  cidr?: string;
  /**
   * @remarks
   * The ID of the instance.
   * 
   * @example
   * c-123xxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      aclId: 'AclId',
      cidr: 'Cidr',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclId: 'string',
      cidr: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

