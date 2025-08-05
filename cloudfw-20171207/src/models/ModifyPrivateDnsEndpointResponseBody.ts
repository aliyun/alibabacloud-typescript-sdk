// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPrivateDnsEndpointResponseBody extends $dara.Model {
  /**
   * @example
   * 6B780BD6-282C-51A9-A8E6-59F636BAFA54
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

