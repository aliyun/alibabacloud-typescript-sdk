// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFaultDiagnosisUserDetailRequest extends $dara.Model {
  /**
   * @remarks
   * APP ID。
   * 
   * This parameter is required.
   * 
   * @example
   * 0rbd****
   */
  appId?: string;
  /**
   * @remarks
   * 频道ID
   * 
   * This parameter is required.
   * 
   * @example
   * 311
   */
  channelId?: string;
  /**
   * @remarks
   * 频道创建时间，使用UNIX时间戳表示，单位：秒。
   * 
   * This parameter is required.
   * 
   * @example
   * 1615892596
   */
  createdTs?: number;
  /**
   * @remarks
   * 异常类型。取值：
   * - **JOIN_SLOW**：进频道慢 。
   * - **AUDIO_STUCK**：音频卡顿。
   * - **VIDEO_STUCK**：视频卡顿。
   * - **VIDEO_VAGUE**：视频模糊。
   * - **HIGH_DELAY**：通话延迟高 。
   * - **FIRST_FRAME_SLOW**：接收首屏慢。
   * 
   * This parameter is required.
   * 
   * @example
   * JOIN_SLOW
   */
  faultType?: string;
  /**
   * @remarks
   * 是否查询通话用户信息，为空默认是false。
   * 
   * @example
   * true
   */
  queryCallUserInfo?: boolean;
  /**
   * @remarks
   * 用户ID
   * 
   * This parameter is required.
   * 
   * @example
   * c906531af5f9****
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      channelId: 'ChannelId',
      createdTs: 'CreatedTs',
      faultType: 'FaultType',
      queryCallUserInfo: 'QueryCallUserInfo',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      channelId: 'string',
      createdTs: 'number',
      faultType: 'string',
      queryCallUserInfo: 'boolean',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

