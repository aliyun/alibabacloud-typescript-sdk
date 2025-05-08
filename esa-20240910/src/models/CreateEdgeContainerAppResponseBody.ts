// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEdgeContainerAppResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the application that is created.
   * 
   * @example
   * app-880688675783794688
   */
  appId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE73368
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
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

