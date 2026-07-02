// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * The running status of the instance. Valid values:
   * - **Running**: running.
   * - **Offline**: offline.
   * 
   * 
   * 
   * > An instance in the Offline status indicates that the heartbeat between the node and the SysOM server is lost. It does not mean that the corresponding ECS instance is not running.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instance: 'instance',
      region: 'region',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instance: 'string',
      region: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceStatusResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID, which can be used for end-to-end diagnostics.
   * 
   * @example
   * 5BC79EF5-798B-5499-9683-4E14EBBBF712
   */
  requestId?: string;
  /**
   * @remarks
   * The status code.
   * - `code == Success` indicates that the authorization is successful.
   * - Other status codes indicate that the authorization failed. Check the `message` field for the detailed error message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListInstanceStatusResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error information.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 218
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      code: 'code',
      data: 'data',
      message: 'message',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      code: 'string',
      data: { 'type': 'array', 'itemType': ListInstanceStatusResponseBodyData },
      message: 'string',
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

