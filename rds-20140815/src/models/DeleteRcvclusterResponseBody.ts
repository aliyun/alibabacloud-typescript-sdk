// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteRCVClusterResponseBody extends $dara.Model {
  /**
   * @example
   * 0688F1D2-CDA8-5617-A43C-ADAC61D80D43
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

