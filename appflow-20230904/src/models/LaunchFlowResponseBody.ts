// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class LaunchFlowResponseBody extends $dara.Model {
  /**
   * @example
   * None
   */
  data?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 965C0149-B68B-5A0C-AEA8-48DAEC7779BD
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

