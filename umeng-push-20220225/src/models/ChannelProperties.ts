// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ChannelProperties extends $dara.Model {
  channelActivity?: string;
  channelFcm?: string;
  harmonyChannelCategory?: string;
  huaweiChannelCategory?: string;
  huaweiChannelImportance?: string;
  /**
   * @example
   * 取值为"NORMAL"和"HIGH",默认为”NORMAL”
   */
  huaweiMessageUrgency?: string;
  mainActivity?: string;
  oppoCategory?: string;
  oppoChannelId?: string;
  oppoNotifyLevel?: string;
  /**
   * @example
   * "true" ,默认为"false"，可不填
   */
  useHuaweiMessage?: string;
  /**
   * @example
   * true
   */
  useHuaweiPlainMessage?: string;
  /**
   * @example
   * "true",默认"false"
   */
  vivoAddBadge?: string;
  vivoCategory?: string;
  vivoPushMode?: string;
  xiaomiChannelId?: string;
  static names(): { [key: string]: string } {
    return {
      channelActivity: 'channelActivity',
      channelFcm: 'channelFcm',
      harmonyChannelCategory: 'harmonyChannelCategory',
      huaweiChannelCategory: 'huaweiChannelCategory',
      huaweiChannelImportance: 'huaweiChannelImportance',
      huaweiMessageUrgency: 'huaweiMessageUrgency',
      mainActivity: 'mainActivity',
      oppoCategory: 'oppoCategory',
      oppoChannelId: 'oppoChannelId',
      oppoNotifyLevel: 'oppoNotifyLevel',
      useHuaweiMessage: 'useHuaweiMessage',
      useHuaweiPlainMessage: 'useHuaweiPlainMessage',
      vivoAddBadge: 'vivoAddBadge',
      vivoCategory: 'vivoCategory',
      vivoPushMode: 'vivoPushMode',
      xiaomiChannelId: 'xiaomiChannelId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelActivity: 'string',
      channelFcm: 'string',
      harmonyChannelCategory: 'string',
      huaweiChannelCategory: 'string',
      huaweiChannelImportance: 'string',
      huaweiMessageUrgency: 'string',
      mainActivity: 'string',
      oppoCategory: 'string',
      oppoChannelId: 'string',
      oppoNotifyLevel: 'string',
      useHuaweiMessage: 'string',
      useHuaweiPlainMessage: 'string',
      vivoAddBadge: 'string',
      vivoCategory: 'string',
      vivoPushMode: 'string',
      xiaomiChannelId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

