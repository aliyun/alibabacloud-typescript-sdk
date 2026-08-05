// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOfflineTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 2423C841-91C4-5E51-B296-590D367967FC
   */
  requestId?: string;
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

