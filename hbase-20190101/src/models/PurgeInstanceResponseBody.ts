// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PurgeInstanceResponseBody extends $dara.Model {
  /**
   * @example
   * 276F899F-E952-496F-81B8-BD46D86854E3
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

