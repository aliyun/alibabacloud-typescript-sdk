// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSQLCollectorPolicyResponseBody extends $dara.Model {
  requestId?: string;
  SQLCollectorStatus?: string;
  storagePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      SQLCollectorStatus: 'SQLCollectorStatus',
      storagePeriod: 'StoragePeriod',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      SQLCollectorStatus: 'string',
      storagePeriod: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

