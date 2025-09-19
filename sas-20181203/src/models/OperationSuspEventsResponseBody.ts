// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OperationSuspEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether you have access permissions. Valid values:
   * 
   * *   **pass**: yes
   * *   **no_permission**: no
   * 
   * @example
   * pass
   */
  accessCode?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 7E0618A9-D5EF-4220-9471-C42B5E92719F
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether exceptions are handled. Valid values:
   * 
   * *   **true**: yes
   * *   **false**: no
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessCode: 'AccessCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessCode: 'string',
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

