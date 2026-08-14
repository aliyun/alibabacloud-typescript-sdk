// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDDosEventMaxResponseBody extends $dara.Model {
  cps?: number;
  mbps?: number;
  qps?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cps: 'Cps',
      mbps: 'Mbps',
      qps: 'Qps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cps: 'number',
      mbps: 'number',
      qps: 'number',
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

