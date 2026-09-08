// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDataMaskingEncryptionAlgorithmsResponseBodyAlgorithms extends $dara.Model {
  /**
   * @example
   * data_masking_not_running
   */
  errorCode?: string;
  /**
   * @example
   * 实例未处于运行状态
   */
  errorMessage?: string;
  /**
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
  algorithms?: ListDataMaskingEncryptionAlgorithmsResponseBodyAlgorithms[];
  /**
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

