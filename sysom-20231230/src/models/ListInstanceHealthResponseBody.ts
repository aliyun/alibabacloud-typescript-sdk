// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListInstanceHealthResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of container image names in the Pod.
   */
  images?: string[];
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
   * The namespace of the Pod.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The Pod name.
   * 
   * @example
   * test-pod
   */
  pod?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The health score.
   * 
   * @example
   * 100
   */
  score?: number;
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
   * The status code.
   * - If `code == Success`, the authorization is successful.
   * - Other status codes indicate authorization failed. Check the `message` field for the detailed fault information.
   * 
   * @example
   * SysomOpenAPI.ServerError
   */
  code?: string;
  /**
   * @remarks
   * The returned data.
   */
  data?: ListInstanceHealthResponseBodyData[];
  /**
   * @remarks
   * The error message.
   * - If `code == Success`, this field is empty.
   * - Otherwise, this field contains the request error information.
   * 
   * @example
   * Query no data
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 35F91AAB-5FDF-5A22-B211-C7C6B00817D0
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of query results.
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

