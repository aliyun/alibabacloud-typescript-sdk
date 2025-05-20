// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddHDMInstanceResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The user ID of the caller.
   * 
   * @example
   * 31063db679****
   */
  callerUid?: string;
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message returned if the request failed.
   * 
   * @example
   * InvalidRequestURL
   */
  error?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-2ze1jdv45i7l6****
   */
  instanceId?: string;
  /**
   * @remarks
   * The endpoint of the instance.
   * 
   * @example
   * rm-de21209****.mysql.rds.aliyuncs.com
   */
  ip?: string;
  /**
   * @remarks
   * The ID of the instance owner.
   * 
   * @example
   * 325352345
   */
  ownerId?: string;
  /**
   * @remarks
   * The port number of the instance that you want to access.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The role of the current API caller.
   * 
   * @example
   * master
   */
  role?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * L0EPfLS****=SCE00000*****
   */
  tenantId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * tokenID
   */
  token?: string;
  /**
   * @remarks
   * The unique identifier of the instance.
   * 
   * @example
   * hdm_3063db6792965c080a4bcb6e6304****
   */
  uuid?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-m5e666n89m2bx8jar****
   */
  vpcId?: string;
  static names(): { [key: string]: string } {
    return {
      callerUid: 'CallerUid',
      code: 'Code',
      error: 'Error',
      instanceId: 'InstanceId',
      ip: 'Ip',
      ownerId: 'OwnerId',
      port: 'Port',
      role: 'Role',
      tenantId: 'TenantId',
      token: 'Token',
      uuid: 'Uuid',
      vpcId: 'VpcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      callerUid: 'string',
      code: 'number',
      error: 'string',
      instanceId: 'string',
      ip: 'string',
      ownerId: 'string',
      port: 'number',
      role: 'string',
      tenantId: 'string',
      token: 'string',
      uuid: 'string',
      vpcId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

