// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class HttpApiRouteDomains extends $dara.Model {
  domainId?: string;
  domainName?: string;
  static names(): { [key: string]: string } {
    return {
      domainId: 'DomainId',
      domainName: 'DomainName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainId: 'string',
      domainName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

