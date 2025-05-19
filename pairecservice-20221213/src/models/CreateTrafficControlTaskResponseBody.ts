// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficControlTaskResponseBody extends $dara.Model {
  /**
   * @example
   * 42391E6D-822C-58F8-9F7E-D991BB86D6AD
   */
  requestId?: string;
  /**
   * @example
   * 1
   */
  trafficControlTaskId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficControlTaskId: 'TrafficControlTaskId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficControlTaskId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

