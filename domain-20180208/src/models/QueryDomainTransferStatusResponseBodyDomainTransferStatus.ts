// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDomainTransferStatusResponseBodyDomainTransferStatus extends $dara.Model {
  domainName?: string;
  domainStatusDescription?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      domainStatusDescription: 'DomainStatusDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      domainStatusDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

