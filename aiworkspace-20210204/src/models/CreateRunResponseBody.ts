// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The run ID.
   * 
   * @example
   * run-1meoz7VJd2C6f****
   */
  runId?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ADF6D849-*****-7E7030F0CE53
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      runId: 'RunId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      runId: 'string',
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

