// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartSessionClusterResponseBody extends $dara.Model {
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
   * The workspace ID.
   * 
   * @example
   * w-******
   */
  sessionClusterId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      sessionClusterId: 'sessionClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      sessionClusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

