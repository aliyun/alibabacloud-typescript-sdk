// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDomainPartByProxyResponseBody extends $dara.Model {
  compressed?: boolean;
  data?: string;
  dataType?: string;
  domainCode?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compressed: 'Compressed',
      data: 'Data',
      dataType: 'DataType',
      domainCode: 'DomainCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressed: 'boolean',
      data: 'string',
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

