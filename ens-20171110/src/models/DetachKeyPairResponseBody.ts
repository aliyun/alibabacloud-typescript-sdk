// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachKeyPairResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The status code of the operation. 200 indicates that the operation succeeded.
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
   * The message of the operation. If the value of the Code parameter is 200, the value of this parameter is successful.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation is successful.
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
   * The number of instances to which the SSH key pair failed to be bound.
   * 
   * @example
   * 1
   */
  failCount?: number;
  /**
   * @remarks
   * The ID of the SSH key pair.
   * 
   * @example
   * ssh-xxx
   */
  keyPairId?: string;
  /**
   * @remarks
   * The name of the SSH key pair.
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
   * The operation results.
   */
  results?: DetachKeyPairResponseBodyResults[];
  /**
   * @remarks
   * The total number of instances to which the SSH key pair is bound.
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

