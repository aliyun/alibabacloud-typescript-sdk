// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuntimeChannelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The channel avatar URL.
   */
  avatarUrl?: string;
  /**
   * @remarks
   * The channel type. Valid values: System: a system-supported channel. Custom: a custom channel.
   */
  channelType?: string;
  /**
   * @remarks
   * The channel code.
   * 
   * @example
   * dingtalk-connector
   */
  code?: string;
  /**
   * @remarks
   * The channel configuration JSON string.
   * 
   * Currently, only the simple configuration mode is supported. You must pass in AppKey and AppSecret.
   * 
   * @example
   * {
   *     "appKey": "abc",
   *     "appSecret": "efg"
   * }
   */
  config?: string;
  /**
   * @remarks
   * The configuration mode. Valid values: Simple: simple configuration mode. Custom: custom configuration mode.
   */
  configMode?: string;
  /**
   * @remarks
   * The QR code configuration notification page URL. This parameter is returned only for the ENTERPRISE or ENTERPRISE_JVS platform.
   */
  qrCodeNotifyUrl?: string;
  /**
   * @remarks
   * The QR code configuration status. This parameter is returned only when the status is not in a final state.
   */
  qrCodeStatus?: string;
  /**
   * @remarks
   * The risk type. This parameter is returned only when **includeRiskInfo=true**.
   * 
   * @example
   * Normal
   */
  riskType?: string;
  /**
   * @remarks
   * The configuration status.
   * 
   * @example
   * Configured
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      avatarUrl: 'AvatarUrl',
      channelType: 'ChannelType',
      code: 'Code',
      config: 'Config',
      configMode: 'ConfigMode',
      qrCodeNotifyUrl: 'QrCodeNotifyUrl',
      qrCodeStatus: 'QrCodeStatus',
      riskType: 'RiskType',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      avatarUrl: 'string',
      channelType: 'string',
      code: 'string',
      config: 'string',
      configMode: 'string',
      qrCodeNotifyUrl: 'string',
      qrCodeStatus: 'string',
      riskType: 'string',
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

export class GetRuntimeChannelResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned object.
   */
  data?: GetRuntimeChannelResponseBodyData[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 6
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetRuntimeChannelResponseBodyData },
      requestId: 'string',
      totalCount: 'number',
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

