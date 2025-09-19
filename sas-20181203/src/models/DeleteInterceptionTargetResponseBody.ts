// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInterceptionTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D81DD78E-E006-5C65-A171-C8CB09XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the network objects are removed. Valid values:
   * 
   * *   **true**: The network objects are removed.
   * *   **false**: The network objects fail to be removed.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

