// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVSwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the created VSwitch.
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

