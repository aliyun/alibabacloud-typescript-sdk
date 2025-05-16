// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryDomainTransferStatusResponseBodyDomainTransferStatus } from "./QueryDomainTransferStatusResponseBodyDomainTransferStatus";


export class QueryDomainTransferStatusResponseBody extends $dara.Model {
  domainTransferStatus?: QueryDomainTransferStatusResponseBodyDomainTransferStatus[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainTransferStatus: 'DomainTransferStatus',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainTransferStatus: { 'type': 'array', 'itemType': QueryDomainTransferStatusResponseBodyDomainTransferStatus },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainTransferStatus)) {
      $dara.Model.validateArray(this.domainTransferStatus);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

