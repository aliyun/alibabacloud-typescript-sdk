// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRuntimeChannelResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The channel avatar URL.
   * 
   * @example
   * https://test.com/test.jpg
   */
  avatarUrl?: string;
  /**
   * @remarks
   * The channel type.
   * 
   * @example
   * System
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
   * Currently, only the simple configuration mode is supported. You must pass AppKey and AppSecret.
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
   * The configuration mode.
   * 
   * @example
   * Simple
   */
  configMode?: string;
  /**
   * @remarks
   * The QR code configuration notification page URL (returned only for ENTERPRISE/ENTERPRISE_JVS platforms).
   * 
   * @example
   * https://eds.console.aliyun.com/public/scan-pair?taskId=e7eb5d86-1b94-4d58-****-3b78b01df99e&code=dingtalk-connector&region=cn-shanghai
   */
  qrCodeNotifyUrl?: string;
  /**
   * @remarks
   * The QR code configuration status (returned only when not in a desired state).
   * 
   * @example
   * https://q.qq.com/qqbot/openclaw/entity-picker.html?session_id=c0882266-77c0-4094-af93-442*****2a58
   */
  qrCodeStatus?: string;
  /**
   * @remarks
   * The risk type (returned only when **includeRiskInfo=true**).
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
   * The total number of entries returned.
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

