// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteSceneResponseBody extends $dara.Model {
  /**
   * @example
   * 191C79AD-F9F9-531E-B8C1-73DF6433B920
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

