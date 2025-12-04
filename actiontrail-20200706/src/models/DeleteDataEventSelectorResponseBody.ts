// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDataEventSelectorResponseBody extends $dara.Model {
  /**
   * @example
   * 1D9DD159-DFFF-4882-ACEC-B4A727E9****
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

