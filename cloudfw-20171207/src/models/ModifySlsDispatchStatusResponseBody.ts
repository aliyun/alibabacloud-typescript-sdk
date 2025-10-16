// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySlsDispatchStatusResponseBody extends $dara.Model {
  /**
   * @example
   * CE901E31-4AE9-579D-AC37-D2F1BB43****
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

