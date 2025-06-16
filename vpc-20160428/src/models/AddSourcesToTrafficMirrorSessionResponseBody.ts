// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddSourcesToTrafficMirrorSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 87F70089-5B38-41A8-BAD8-0B55E2F8DC57
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

