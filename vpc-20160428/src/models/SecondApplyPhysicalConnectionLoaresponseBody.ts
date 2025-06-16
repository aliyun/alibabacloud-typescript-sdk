// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SecondApplyPhysicalConnectionLOAResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A47BD386-7FDE-42C4-8D22-C6223D18AA1C
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

