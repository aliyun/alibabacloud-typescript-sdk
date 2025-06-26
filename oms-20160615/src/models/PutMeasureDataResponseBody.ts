// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutMeasureDataResponseBody extends $dara.Model {
  apiType?: string;
  dataType?: string;
  domainCode?: string;
  requestId?: string;
  sourceRequestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiType: 'ApiType',
      dataType: 'DataType',
      domainCode: 'DomainCode',
      requestId: 'RequestId',
      sourceRequestId: 'SourceRequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
      dataType: 'string',
      domainCode: 'string',
      requestId: 'string',
      sourceRequestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

