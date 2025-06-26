// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetReadyFlagByProxyResponseBody extends $dara.Model {
  apiType?: string;
  compressed?: boolean;
  data?: string;
  dataType?: string;
  domainCode?: string;
  nextToken?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiType: 'ApiType',
      compressed: 'Compressed',
      data: 'Data',
      dataType: 'DataType',
      domainCode: 'DomainCode',
      nextToken: 'NextToken',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
      compressed: 'boolean',
      data: 'string',
      dataType: 'string',
      domainCode: 'string',
      nextToken: 'string',
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

