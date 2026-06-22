// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteInterceptionTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique ID for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * D81DD78E-E006-5C65-A171-C8CB09XXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the network objects were deleted. Valid values:
   * - **true**: The network objects were deleted.
   * - **false**: The network objects failed to be deleted.
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

