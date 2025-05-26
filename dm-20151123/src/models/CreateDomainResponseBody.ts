// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * Domain ID
   * 
   * @example
   * 158910
   */
  domainId?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * B49AD828-25D1-488C-90B7-8853C1944486
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
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

