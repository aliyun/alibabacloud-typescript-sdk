// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAICenterStateResponseBody extends $dara.Model {
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
   * The state of the AI center. Valid values:
   * 
   * - Running
   * 
   * - inactive
   * 
   * - activating
   * 
   * @example
   * Running
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
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

