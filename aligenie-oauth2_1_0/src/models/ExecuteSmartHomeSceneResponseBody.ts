// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteSmartHomeSceneResponseBody extends $dara.Model {
  /**
   * @example
   * 435CF567-12DC-5761-AFA8-650774502E2D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

