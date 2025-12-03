// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RelateDbForHBaseHaResponseBody extends $dara.Model {
  /**
   * @example
   * DC654531-0799-4502-AFA5-80EE1C16829A
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

