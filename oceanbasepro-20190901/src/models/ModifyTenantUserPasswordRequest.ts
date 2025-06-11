// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTenantUserPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * 加密方式。
   * 
   * @example
   * RSA
   */
  encryptionType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * ```
   * http(s)://[Endpoint]/?Action=ModifyTenantUserPassword
   * &UserName=pay_test
   * &TenantId=ob2mr3oae0****
   * &UserPassword=!Aliyun4Oceanbase
   * &InstanceId=ob317v4uif****
   * &Common request parameters
   * ```
   * 
   * This parameter is required.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  /**
   * @remarks
   * The ID of the OceanBase cluster.
   * 
   * This parameter is required.
   * 
   * @example
   * pay_test
   */
  userName?: string;
  /**
   * @remarks
   * You can call this operation to change the logon password of a specified account in a tenant.
   * 
   * This parameter is required.
   * 
   * @example
   * !Aliyun4Oceanbase
   */
  userPassword?: string;
  static names(): { [key: string]: string } {
    return {
      encryptionType: 'EncryptionType',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
      userName: 'UserName',
      userPassword: 'UserPassword',
    };
  }

  static types(): { [key: string]: any } {
    return {
      encryptionType: 'string',
      instanceId: 'string',
      tenantId: 'string',
      userName: 'string',
      userPassword: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

