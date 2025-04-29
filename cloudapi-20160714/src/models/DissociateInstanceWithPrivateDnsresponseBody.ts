// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DissociateInstanceWithPrivateDNSResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 6C87A26A-6A18-4B8E-8099-705278381A2C
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

