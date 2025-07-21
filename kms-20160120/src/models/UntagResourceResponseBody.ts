// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourceResponseBody extends $dara.Model {
  /**
   * @example
   * 4162a6af-bc99-40b3-a552-89dcc8aaf7c8
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

