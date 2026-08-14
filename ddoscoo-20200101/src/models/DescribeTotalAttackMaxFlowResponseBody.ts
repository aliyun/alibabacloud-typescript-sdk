// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTotalAttackMaxFlowResponseBody extends $dara.Model {
  bps?: number;
  pps?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      bps: 'Bps',
      pps: 'Pps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bps: 'number',
      pps: 'number',
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

