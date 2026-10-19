// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataMaskingEncryptionAlgorithmsResponseBodyAlgorithms extends $dara.Model {
  /**
   * @remarks
   * The business error code for the record or operation. This value can be empty if no error occurs. Evaluate this value together with ErrorMessage.
   * 
   * @example
   * data_masking_not_running
   */
  errorCode?: string;
  /**
   * @remarks
   * The business error description for the record or operation.
   * 
   * @example
   * The instance is not in the running state
   */
  errorMessage?: string;
  /**
   * @remarks
   * The algorithm name.
   * 
   * @example
   * AES_256_GCM
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDataMaskingEncryptionAlgorithmsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of column encryption algorithms.
   */
  algorithms?: ListDataMaskingEncryptionAlgorithmsResponseBodyAlgorithms[];
  /**
   * @remarks
   * The request ID, which can be used to locate this API call.
   * 
   * @example
   * 7C6D8E9F-1234-5678-ABCD-0123456789AB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      algorithms: 'Algorithms',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithms: { 'type': 'array', 'itemType': ListDataMaskingEncryptionAlgorithmsResponseBodyAlgorithms },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.algorithms)) {
      $dara.Model.validateArray(this.algorithms);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

