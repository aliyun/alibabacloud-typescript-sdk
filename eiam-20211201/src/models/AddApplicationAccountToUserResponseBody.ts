// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddApplicationAccountToUserResponseBody extends $dara.Model {
  /**
   * @example
   * aac_m6z7awz5kresi2ezgajsbkxxxx
   */
  applicationAccountId?: string;
  /**
   * @example
   * 0441BD79-92F3-53AA-8657-F8CE4A2B912A
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      applicationAccountId: 'ApplicationAccountId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationAccountId: 'string',
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

