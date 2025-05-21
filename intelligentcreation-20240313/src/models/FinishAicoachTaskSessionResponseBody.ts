// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FinishAICoachTaskSessionResponseBody extends $dara.Model {
  /**
   * @example
   * 14878724-A835-578D-9DD5-4779ADCE9221
   */
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

