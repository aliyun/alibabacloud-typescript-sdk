// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutEnableFwSwitchResponseBodyAbnormalResourceStatusList extends $dara.Model {
  /**
   * @remarks
   * The message when the asset is not synchronized. Valid values:
   * - cloudfirewall do not sync this ip address: Cloud Firewall has not synchronized this asset IP address.
   * 
   * @example
   * cloudfirewall do not sync this ip address
   */
  msg?: string;
  /**
   * @remarks
   * The asset IP address.
   * 
   * @example
   * 203.0.113.0
   */
  resource?: string;
  /**
   * @remarks
   * The status of the asset that is not synchronized. Valid values:
   * - ip_not_sync: The asset is not synchronized.
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
   * The status information list of assets that are not synchronized.
   */
  abnormalResourceStatusList?: PutEnableFwSwitchResponseBodyAbnormalResourceStatusList[];
  /**
   * @remarks
   * Indicates that this is a successful dry run response. A value of true indicates that only the dry run was completed and no real changes were made. This field is not returned or is set to false for real calls.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
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
      dryRun: 'DryRun',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abnormalResourceStatusList: { 'type': 'array', 'itemType': PutEnableFwSwitchResponseBodyAbnormalResourceStatusList },
      dryRun: 'boolean',
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

