// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackSuspEventQuaraFileResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 52A3AEE6-114A-499D-8990-4BA9B27FE0AA
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

