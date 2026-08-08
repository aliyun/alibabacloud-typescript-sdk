// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableCrossAccountManagementResponseBody extends $dara.Model {
  /**
   * @example
   * 14DFF801-A4E3-5136-AAB8-7D246012CD7A
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

