// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateGlobalEventsStorageRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D7A0694E-C8FE-574E-92E3-63C5B5D23BD4
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

