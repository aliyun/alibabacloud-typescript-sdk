// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseReadWriteSplittingConnectionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5A77D650-27A1-4E08-AD9E-59008EDB6927
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

