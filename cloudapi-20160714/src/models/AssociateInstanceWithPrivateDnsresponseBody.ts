// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AssociateInstanceWithPrivateDNSResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 03442A3D-3B7D-434C-8A95-A5FEB999B529
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

