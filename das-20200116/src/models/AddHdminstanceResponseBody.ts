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
   * The status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message.
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
   * The IP endpoint of the instance.
   * 
   * @example
   * rm-de21209****.mysql.rds.aliyuncs.com
   */
  ip?: string;
  /**
   * @remarks
   * The owner ID.
   * 
   * @example
   * 325352345
   */
  ownerId?: string;
  /**
   * @remarks
   * The port of the target instance.
   * 
   * @example
   * 3306
   */
  port?: number;
  /**
   * @remarks
   * The role information.
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
   * The client token, which is a custom unique random string.
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
   * VPC ID。
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

export class AddHDMInstanceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The details, including the total number of entries and error codes.
   */
  data?: AddHDMInstanceResponseBodyData;
  /**
   * @remarks
   * The returned message.
   * >If the request is successful, **Successful** is returned. If the request fails, an error message is returned, such as an error code.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B6D17591-B48B-4D31-9CD6-9B9796B2****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - **true**: The request is successful.
   * - **false**: The request fails.
   * 
   * @example
   * true
   */
  success?: string;
  /**
   * @remarks
   * The reserved parameter.
   * 
   * @example
   * None
   */
  synchro?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      synchro: 'Synchro',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: AddHDMInstanceResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'string',
      synchro: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

