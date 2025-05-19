// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutMetricRuleTargetsResponseBodyFailData } from "./PutMetricRuleTargetsResponseBodyFailData";


export class PutMetricRuleTargetsResponseBody extends $dara.Model {
  code?: string;
  failData?: PutMetricRuleTargetsResponseBodyFailData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      failData: 'FailData',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      failData: PutMetricRuleTargetsResponseBodyFailData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.failData && typeof (this.failData as any).validate === 'function') {
      (this.failData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

