// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { SafeChangeQueryApproveFlowResponseBodyData } from "./SafeChangeQueryApproveFlowResponseBodyData";


export class SafeChangeQueryApproveFlowResponseBody extends $dara.Model {
  code?: number;
  data?: SafeChangeQueryApproveFlowResponseBodyData[];
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': SafeChangeQueryApproveFlowResponseBodyData },
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

