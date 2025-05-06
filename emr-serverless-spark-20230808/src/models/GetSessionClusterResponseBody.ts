// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSessionClusterResponseBodySessionCluster } from "./GetSessionClusterResponseBodySessionCluster";


export class GetSessionClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  /**
   * @remarks
   * The session.
   */
  sessionCluster?: GetSessionClusterResponseBodySessionCluster;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      sessionCluster: 'sessionCluster',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessionCluster: GetSessionClusterResponseBodySessionCluster,
    };
  }

  validate() {
    if(this.sessionCluster && typeof (this.sessionCluster as any).validate === 'function') {
      (this.sessionCluster as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

