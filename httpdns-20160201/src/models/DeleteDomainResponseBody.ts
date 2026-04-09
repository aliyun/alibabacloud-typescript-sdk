// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDomainResponseBody extends $dara.Model {
  /**
   * @example
   * www.example.com
   */
  domainName?: string;
  /**
   * @example
   * FA8C2599-362D-4113-8FB4-E88A40C2****
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

