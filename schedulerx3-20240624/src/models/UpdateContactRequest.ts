// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateContactRequest extends $dara.Model {
  /**
   * @remarks
   * The JSON character string for channel parameter settings. This parameter is optional. If specified, the settings are updated.
   * 
   * @example
   * {"channels":[{"channelType":"dingtalk","clientId":"xxx","clientSecret":"xxx","targetType":"group","targetId":"xxx","robotCode":"xxx"}]}
   */
  config?: string;
  /**
   * @remarks
   * The name of the contact to update.
   * 
   * This parameter is required.
   * 
   * @example
   * Tom
   */
  contactName?: string;
  /**
   * @remarks
   * Specifies whether to enable or disable the notification channel for the contact.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @remarks
   * The type of the contact.
   * 
   * @example
   * IM
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      contactName: 'ContactName',
      enabled: 'Enabled',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      contactName: 'string',
      enabled: 'boolean',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

