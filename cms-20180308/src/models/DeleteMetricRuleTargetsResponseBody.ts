// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeleteMetricRuleTargetsResponseBodyFailIds } from "./DeleteMetricRuleTargetsResponseBodyFailIds";


export class DeleteMetricRuleTargetsResponseBody extends $dara.Model {
  code?: string;
  failIds?: DeleteMetricRuleTargetsResponseBodyFailIds;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failIds: 'FailIds',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failIds: DeleteMetricRuleTargetsResponseBodyFailIds,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.failIds && typeof (this.failIds as any).validate === 'function') {
      (this.failIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

