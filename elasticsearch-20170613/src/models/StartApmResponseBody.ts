// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartApmResponseBody extends $dara.Model {
  /**
   * @example
   * 526F30AB-4A43-55BA-910F-ACD275FD5F14
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

