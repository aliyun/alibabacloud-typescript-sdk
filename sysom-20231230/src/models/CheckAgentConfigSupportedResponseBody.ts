// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckAgentConfigSupportedResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The cluster ID.
   * 
   * @example
   * a36a284e-fc8a-4c8a-abad-03d441e6ebcf
   */
  cluster?: string;
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
   * The reason why the instance is not supported for management. This field is not empty when success is false.
   * 
   * @example
   * instance not found in ecs
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      cluster: 'cluster',
      instance: 'instance',
      reason: 'reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cluster: 'string',
      instance: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CheckAgentConfigSupportedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * - If `code` is `Success`, the authorization is successful.
   * - Other status codes indicate that the authorization failed. If the authorization failed, check the `message` field for the detailed fault information.
   * 
   * @example
   * Success  Fail
   */
  code?: string;
  /**
   * @remarks
   * The returned result.
   */
  data?: CheckAgentConfigSupportedResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * - If code is Success, this field is empty.
   * - Otherwise, this field contains the error information of the request.
   * 
   * @example
   * server error
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
  /**
   * @remarks
   * The total number of returned results.
   * 
   * @example
   * 42
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': CheckAgentConfigSupportedResponseBodyData },
      message: 'string',
      requestId: 'string',
      total: 'number',
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

