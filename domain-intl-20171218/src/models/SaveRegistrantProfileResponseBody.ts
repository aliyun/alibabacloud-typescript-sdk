// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveRegistrantProfileResponseBody extends $dara.Model {
  /**
   * @example
   * 12380891
   */
  registrantProfileId?: number;
  /**
   * @example
   * A9C35C47-3366-482E-B872-8C9EA4733FE9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      registrantProfileId: 'RegistrantProfileId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      registrantProfileId: 'number',
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

