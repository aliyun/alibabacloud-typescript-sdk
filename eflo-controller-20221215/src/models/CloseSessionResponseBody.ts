// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CloseSessionResponseBody extends $dara.Model {
  /**
   * @example
   * 07AA3A1F-321E-50D8-B834-88C411331C94
   */
  requestId?: string;
  /**
   * @example
   * i206495551737511455528
   */
  sessionId?: string;
  /**
   * @remarks
   * ClosingActive
   * 
   * @example
   * Inactive
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      sessionId: 'SessionId',
      state: 'State',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessionId: 'string',
      state: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

