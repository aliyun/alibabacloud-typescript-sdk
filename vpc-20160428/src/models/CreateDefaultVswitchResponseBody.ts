// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDefaultVSwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0ED8D006-F706-4D23-88ED-E11ED28DCAC0
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the default vSwitch.
   * 
   * @example
   * vsw-bp1a4b5qhmxftjimq****
   */
  vSwitchId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vSwitchId: 'VSwitchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vSwitchId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

