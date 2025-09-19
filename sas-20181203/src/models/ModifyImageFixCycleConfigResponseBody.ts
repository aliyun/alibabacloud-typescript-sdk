// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyImageFixCycleConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the configurations of the scheduled image fix are modified.
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7A4DF7E-57A4-5BBF-8290-223754AD****
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
      data: 'boolean',
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

