// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PutEnableFwSwitchResponseBodyAbnormalResourceStatusList } from "./PutEnableFwSwitchResponseBodyAbnormalResourceStatusList";


export class PutEnableFwSwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status information of the asset when it is not synchronized to Cloud Firewall.
   */
  abnormalResourceStatusList?: PutEnableFwSwitchResponseBodyAbnormalResourceStatusList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * B2841452-CB8D-4F7D-B247-38E1CF7334F8
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      abnormalResourceStatusList: 'AbnormalResourceStatusList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalResourceStatusList: { 'type': 'array', 'itemType': PutEnableFwSwitchResponseBodyAbnormalResourceStatusList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.abnormalResourceStatusList)) {
      $dara.Model.validateArray(this.abnormalResourceStatusList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

