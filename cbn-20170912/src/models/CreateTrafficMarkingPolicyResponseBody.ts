// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTrafficMarkingPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0876E54E-3E36-5C31-89F0-9EE8A9266F9A
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the traffic marking policy.
   * 
   * @example
   * tm-u9nxup5kww5po8****
   */
  trafficMarkingPolicyId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      trafficMarkingPolicyId: 'TrafficMarkingPolicyId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      trafficMarkingPolicyId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

