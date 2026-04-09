// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDomainResponseBody extends $dara.Model {
  /**
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @example
   * ADA27798-6911-4B06-AF34-53F62F62XXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
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

