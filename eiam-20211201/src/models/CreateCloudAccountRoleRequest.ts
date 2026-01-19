// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCloudAccountRoleRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * client-token-example
   */
  clientToken?: string;
  /**
   * @remarks
   * 云账号唯一标识
   * 
   * This parameter is required.
   * 
   * @example
   * ca_01kmegjc11qa1txxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * role-test
   */
  cloudAccountRoleName?: string;
  /**
   * @remarks
   * 云账号类型
   * 
   * @example
   * role
   */
  cloudAccountRoleType?: string;
  /**
   * @example
   * cloud_account_role_description
   */
  description?: string;
  /**
   * @remarks
   * IDaaS EIAM实例的ID。
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      cloudAccountId: 'CloudAccountId',
      cloudAccountRoleName: 'CloudAccountRoleName',
      cloudAccountRoleType: 'CloudAccountRoleType',
      description: 'Description',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      cloudAccountId: 'string',
      cloudAccountRoleName: 'string',
      cloudAccountRoleType: 'string',
      description: 'string',
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

