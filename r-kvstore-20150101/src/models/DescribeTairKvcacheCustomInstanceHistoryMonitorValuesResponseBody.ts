// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairKVCacheCustomInstanceHistoryMonitorValuesResponseBody extends $dara.Model {
  datapoints?: string;
  nextToken?: string;
  period?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datapoints: 'Datapoints',
      nextToken: 'NextToken',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoints: 'string',
      nextToken: 'string',
      period: 'string',
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

