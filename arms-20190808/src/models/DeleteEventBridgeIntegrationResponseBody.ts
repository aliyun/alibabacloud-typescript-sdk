// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventBridgeIntegrationResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the EventBridge integration is deleted.
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2B289756-E791-5842-BCBD-AD414C******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isSuccess: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

