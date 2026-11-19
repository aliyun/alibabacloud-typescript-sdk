// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID used for Tracing Analysis and troubleshooting.
   * 
   * @example
   * 0A1B2C3D-4E5F-6789-ABCD-EF0123456789
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the agent was successfully deleted. A successful response always returns `true`. If the operation fails, an error response is returned.
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

