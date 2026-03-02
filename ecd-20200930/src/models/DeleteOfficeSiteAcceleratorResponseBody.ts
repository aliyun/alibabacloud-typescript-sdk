// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteOfficeSiteAcceleratorResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * EE9472BC-0B5D-5458-85CD-C52BDD******
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

