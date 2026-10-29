// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachKeyPairResponseBodyResults extends $dara.Model {
  /**
   * @remarks
   * The status code of the operation. A value of 200 indicates that the operation was successful.
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
   * The message returned for the operation. If the code is 200, the message is successful.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the operation was successful.
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

export class AttachKeyPairResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of instances to which the key pair failed to be attached.
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
   * ssh-xxx
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
   * The result set that indicates the success or failure of the key pair attachment for each instance.
   */
  results?: AttachKeyPairResponseBodyResults[];
  /**
   * @remarks
   * The total number of instances to which the key pair is attached.
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
      results: { 'type': 'array', 'itemType': AttachKeyPairResponseBodyResults },
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

