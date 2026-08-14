// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAttackAnalysisMaxQpsResponseBody extends $dara.Model {
  qps?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      qps: 'Qps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

