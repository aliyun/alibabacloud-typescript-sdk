// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveRealtimeLogAuthorizedResponseBody extends $dara.Model {
  /**
   * @remarks
   * The authorization status. **true**: authorized **false**: not authorized
   * 
   * @example
   * true
   */
  authorizedStatus?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5c6a2a0df228-4a64- af62-20e91b******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizedStatus: 'AuthorizedStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizedStatus: 'string',
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

