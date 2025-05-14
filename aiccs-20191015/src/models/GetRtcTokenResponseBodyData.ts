// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRtcTokenResponseBodyData extends $dara.Model {
  /**
   * @example
   * 139000000
   */
  accountName?: string;
  /**
   * @example
   * 200000000*******
   */
  rtcId?: string;
  /**
   * @example
   * {“cleansession”:true,”clientId”:”GID_VOIP@@@ClientId_****”,”conferenceTopic”:”cs_alicom_voip_conference”,”host”:”mqtt-cn-4590mdhb901.mqtt.aliyuncs.com”,”meetingEventKeepAliveInterval”:0,”phoneTopic”:”alicom_voip_phone”,”port”:0,”reconnectTimeout”:2000,”registerTime”:0,”sdkClientPort”:8883,”serverId”:”GID_VOIP@@@MTEuMTMuMTM2LjExOA==”,”sgwServerTopic”:”alicom_voip_server_pre”,”tlsport”:443,”tokenData”:”abcdef”,”useTLS”:false}
   */
  token?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      rtcId: 'RtcId',
      token: 'Token',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      rtcId: 'string',
      token: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

