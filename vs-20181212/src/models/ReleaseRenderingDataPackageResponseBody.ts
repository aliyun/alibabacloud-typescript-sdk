// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ReleaseRenderingDataPackageResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 5BEF36E7-3838-5B92-BA32-87DBF1425ABC
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

