// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDomainPartByProxyResponseBody extends $dara.Model {
  dataType?: string;
  domainCode?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataType: 'DataType',
      domainCode: 'DomainCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataType: 'string',
      domainCode: 'string',
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

