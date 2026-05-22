// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetErServiceResponseBody extends $dara.Model {
  planName?: string;
  requestId?: string;
  status?: string;
  static names(): { [key: string]: string } {
    return {
      planName: 'PlanName',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planName: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

