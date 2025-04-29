// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateIntranetDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * api.demo.com
   */
  domainName?: string;
  /**
   * @remarks
   * auditing
   * 
   * @example
   * 20D942A5-EDC6-5DA3-93F9-257888399E22
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

