// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PushApplicationDataResponseBodyPushResults } from "./PushApplicationDataResponseBodyPushResults";


export class PushApplicationDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The push results of data files.
   */
  pushResults?: PushApplicationDataResponseBodyPushResults;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pushResults: 'PushResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pushResults: PushApplicationDataResponseBodyPushResults,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pushResults && typeof (this.pushResults as any).validate === 'function') {
      (this.pushResults as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

