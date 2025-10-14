// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAgentResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2226A26A-26E5-5AB9-A14A-54D612FCF96A
   */
  requestId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

