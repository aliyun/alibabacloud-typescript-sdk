// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateJobPlanResponseBody extends $dara.Model {
  jobPlanId?: string;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      jobPlanId: 'JobPlanId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobPlanId: 'string',
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

