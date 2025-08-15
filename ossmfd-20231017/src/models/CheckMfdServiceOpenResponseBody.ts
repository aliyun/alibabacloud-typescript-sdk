// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckMfdServiceOpenResponseBody extends $dara.Model {
  /**
   * @example
   * true
   */
  data?: boolean;
  /**
   * @example
   * AAC546A5-5EDC-5939-86A3-56DFAF******
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

