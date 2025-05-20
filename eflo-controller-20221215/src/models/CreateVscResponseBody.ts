// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVscResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * 887FA855-89F4-5DB3-B305-C5879EC480E6
   */
  requestId?: string;
  /**
   * @remarks
   * Created VscId
   * 
   * @example
   * vsc-001
   */
  vscId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vscId: 'VscId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vscId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

