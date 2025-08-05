// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEnableFwSwitchResponseBodyAbnormalResourceStatusList extends $dara.Model {
  /**
   * @remarks
   * The message displayed when the asset is not synchronized to Cloud Firewall. Valid values:
   * 
   * *   cloudfirewall do not sync this ip address: This IP address is not synchronized to Cloud Firewall.
   * 
   * @example
   * cloudfirewall do not sync this ip address
   */
  msg?: string;
  /**
   * @remarks
   * The IP address of the asset.
   * 
   * @example
   * 203.0.113.0
   */
  resource?: string;
  /**
   * @remarks
   * The status of the asset when it is not synchronized to Cloud Firewall. Valid values:
   * 
   * *   ip_not_sync: The asset is not synchronized.
   * 
   * @example
   * ip_not_sync
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      msg: 'Msg',
      resource: 'Resource',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      msg: 'string',
      resource: 'string',
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

