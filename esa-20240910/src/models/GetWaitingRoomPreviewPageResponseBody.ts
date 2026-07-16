// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWaitingRoomPreviewPageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The waiting room preview page URL.
   * 
   * @example
   * http://waitingroom.myalicdn.com/testxxxx
   */
  pageUrl?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9732E117-8A37-49FD-A36F-ABBB87556CA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageUrl: 'PageUrl',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageUrl: 'string',
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

