// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TriggerStackExecutionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * F2D40488-3F74-568B-87EC-1C04D098DF8B
   */
  requestId?: string;
  /**
   * @example
   * event-xxxx
   */
  triggerId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      triggerId: 'triggerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      triggerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

