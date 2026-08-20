// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProhibitedSoftwareResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 8E53BDC2-5630-58A6-BA3D-5761D4A80A99
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

