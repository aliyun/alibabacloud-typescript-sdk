// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyApiGroupVpcWhitelistResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F8B9DC8C-D6E2-5065-BD1F-0401866E7F10
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

