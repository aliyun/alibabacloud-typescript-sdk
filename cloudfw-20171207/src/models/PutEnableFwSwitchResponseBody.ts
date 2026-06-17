// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEnableFwSwitchResponseBodyAbnormalResourceStatusList extends $dara.Model {
  /**
   * @remarks
   * A message that provides details about why an asset was not synchronized. Valid value:
   * 
   * - `cloudfirewall do not sync this ip address`: Cloud Firewall does not synchronize the IP address of the asset.
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
   * The synchronization status of the asset. Valid value:
   * 
   * - `ip_not_sync`: The asset is not synchronized.
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
   * Information about unsynchronized assets.
   */
  abnormalResourceStatusList?: PutEnableFwSwitchResponseBodyAbnormalResourceStatusList[];
  /**
   * @remarks
   * The request ID.
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

