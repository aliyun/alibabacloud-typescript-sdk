// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMyAgenticNotificationChannelConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The notification channel type. Currently, only FEISHU (Lark) is supported. Specifying other values results in a parameter error.
   * 
   * This parameter is required.
   * 
   * @example
   * FEISHU
   */
  channel?: string;
  /**
   * @remarks
   * The channel configuration in the format of a JSON object string. This parameter is not required if you do not update the binding information. Supports mobile (phone number) or email. You can bind or rebind a Lark account by using one of them at a time. If the existing masked values of mobile or email are passed as ******, they are not modified. openId is a read-only field and cannot be specified.
   * 
   * @example
   * {"email":"user@example.com"}
   */
  config?: string;
  /**
   * @remarks
   * Specifies whether to enable the notification channel. If this parameter is not specified, the original value is retained. When you only modify the switch, the Config parameter is not required, and the existing binding information remains unchanged.
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      config: 'Config',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      config: 'string',
      enabled: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

