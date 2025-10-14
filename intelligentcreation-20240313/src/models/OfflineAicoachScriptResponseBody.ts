// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OfflineAICoachScriptResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EC169FD8-F8D8-5414-A4FF-B6B6751BE36D
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

