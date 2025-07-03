// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseColdDataVolumeResponseBody extends $dara.Model {
  /**
   * @example
   * EA330983-C895-57C0-AE82-5A63106EBB10
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

