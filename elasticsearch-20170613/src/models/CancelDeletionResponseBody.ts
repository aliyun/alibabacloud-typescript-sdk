// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelDeletionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D682B6B3-B425-46DA-A5FC-5F5C60553622
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the instance is recovered. Valid values:
   * 
   * - true: The instance is recovered.
   * - false: The instance failed to be recovered.
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

