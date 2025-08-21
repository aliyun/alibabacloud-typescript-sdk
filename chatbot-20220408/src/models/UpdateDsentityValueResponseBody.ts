// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDSEntityValueResponseBody extends $dara.Model {
  /**
   * @example
   * 2342377423
   */
  entityValueId?: number;
  /**
   * @example
   * sDag3g43wesf2
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      entityValueId: 'EntityValueId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityValueId: 'number',
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

