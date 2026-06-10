// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceStatusResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * i-wz9d00ut2ska3mlyhn6j
   */
  instance?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-hangzhou
   */
  region?: string;
  /**
   * @remarks
   * Instance running status. Valid values:  
   * - **Running**: Running  
   * - **Offline**: Offline  
   * 
   * > An instance in the Offline state indicates that the heartbeat from the edge zone to the SysOM server is lost. This does not mean that the corresponding ECS instance is not running.
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
   * Request ID, which can be used for end-to-end diagnosis
   * 
   * @example
   * 5BC79EF5-798B-5499-9683-4E14EBBBF712
   */
  requestId?: string;
  /**
   * @remarks
   * Status code  
   * - If `code == Success`, authorization succeeded.  
   * - Other status codes indicate authorization failed. When authorization fails, check the `message` field for detailed error message.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * Returned data
   */
  data?: ListInstanceStatusResponseBodyData[];
  /**
   * @remarks
   * Error message  
   * - If `code == Success`, this field is empty.  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * SysomOpenAPIAssumeRoleException: EntityNotExist.Role The role not exists: acs:ram::xxxxx:role/aliyunserviceroleforsysom
   */
  message?: string;
  /**
   * @remarks
   * Total number of records
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

