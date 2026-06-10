// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHealthResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * List of container image names in the pod.
   */
  images?: string[];
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
   * Namespace where the pod resides.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * Pod name.
   * 
   * @example
   * test-pod
   */
  pod?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Health score value.
   * 
   * @example
   * 100
   */
  score?: number;
  /**
   * @remarks
   * Running status of the instance. Valid values:  
   * - **Running**: The instance is running.  
   * - **Offline**: The instance is offline.  
   * 
   * > An instance in the Offline state indicates that the heartbeat from the edge zone to the SysOM server has been lost. This does not mean that the corresponding ECS instance is not running.
   * 
   * @example
   * Running
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      images: 'images',
      instance: 'instance',
      namespace: 'namespace',
      pod: 'pod',
      regionId: 'region_id',
      score: 'score',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      images: { 'type': 'array', 'itemType': 'string' },
      instance: 'string',
      namespace: 'string',
      pod: 'string',
      regionId: 'string',
      score: 'number',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.images)) {
      $dara.Model.validateArray(this.images);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListInstanceHealthResponseBody extends $dara.Model {
  /**
   * @remarks
   * Status code.  
   * - `code == Success` indicates that authorization succeeded.  
   * - Other status codes indicate that authorization failed. When authorization fails, check the `message` field for detailed error message.
   * 
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  /**
   * @remarks
   * Returned data.
   */
  data?: ListInstanceHealthResponseBodyData[];
  /**
   * @remarks
   * error message  
   * - If `code == Success`, this field is empty;  
   * - Otherwise, this field contains the request error message.
   * 
   * @example
   * Query no data
   */
  message?: string;
  /**
   * @remarks
   * Request RequestId
   * 
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of query results.
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
      requestId: 'request_id',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: { 'type': 'array', 'itemType': ListInstanceHealthResponseBodyData },
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

