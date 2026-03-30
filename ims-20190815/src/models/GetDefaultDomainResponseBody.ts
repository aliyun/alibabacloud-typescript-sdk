// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDefaultDomainResponseBody extends $dara.Model {
  /**
   * @remarks
   * The default domain name.
   * 
   * @example
   * examplecompany.onaliyun.com
   */
  defaultDomainName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 66815255-7CCE-4759-AC37-9755794C3626
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      defaultDomainName: 'DefaultDomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultDomainName: 'string',
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

