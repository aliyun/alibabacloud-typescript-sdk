// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckInstanceSupportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ECS instance ID.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * The reason why the instance is not supported for management. This value is not empty when support is false.
   * 
   * @example
   * instance not found in ecs
   */
  reason?: string;
  /**
   * @remarks
   * Indicates whether the instance is supported for management by SysOM.
   * 
   * - **true**: The instance is supported for management by SysOM.
   * 
   * - **false**: The instance is not supported for management by SysOM.
   * 
   * @example
   * true
   */
  support?: boolean;
  static names(): { [key: string]: string } {
    return {
      instance: 'instance',
      reason: 'reason',
      support: 'support',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      reason: 'string',
      support: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckInstanceSupportResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - If `code == Success`, the authorization is successful.
   * - Other status codes indicate authorization failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The response data.
   */
  data?: CheckInstanceSupportResponseBodyData[];
  /**
   * @remarks
   * The error message. This field contains detailed error information when code is not Success.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2D693121-C925-5154-8DF6-C09A8B369822
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': CheckInstanceSupportResponseBodyData },
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

