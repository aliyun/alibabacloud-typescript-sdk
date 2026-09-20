// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EvaluateMultiZoneResourceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FB703B69-D4D4-4879-B9FE-6A37F67C46FD
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether available resources exist. Valid values:
   * 
   * - **true**: Available resources exist.
   * - **false**: No available resources exist.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

