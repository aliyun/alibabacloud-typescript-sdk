// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachKeyPairResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The status code for the operation on a specific instance. A value of `200` indicates a successful operation.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * i-xxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The response message for the operation. If the `Code` is `200`, the message is `successful`.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation on the instance succeeded. Valid values: `true` and `false`.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      instanceId: 'InstanceId',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      instanceId: 'string',
      message: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DetachKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances for which the detach operation failed.
   * 
   * @example
   * 1
   */
  failCount?: number;
  /**
   * @remarks
   * The ID of the key pair.
   * 
   * @example
   * ssh-xxx
   */
  keyPairId?: string;
  /**
   * @remarks
   * The name of the key pair.
   * 
   * @example
   * test-kp
   */
  keyPairName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * xx-xx-xx-xx
   */
  requestId?: string;
  /**
   * @remarks
   * The results of the operation for each instance.
   */
  results?: DetachKeyPairResponseBodyResults[];
  /**
   * @remarks
   * The total number of instances specified in the request.
   * 
   * @example
   * 3
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      failCount: 'FailCount',
      keyPairId: 'KeyPairId',
      keyPairName: 'KeyPairName',
      requestId: 'RequestId',
      results: 'Results',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      failCount: 'number',
      keyPairId: 'string',
      keyPairName: 'string',
      requestId: 'string',
      results: { 'type': 'array', 'itemType': DetachKeyPairResponseBodyResults },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.results)) {
      $dara.Model.validateArray(this.results);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

