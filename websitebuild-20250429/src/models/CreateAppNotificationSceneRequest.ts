// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAppNotificationSceneRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID.
   * 
   * @example
   * WD20250703155602000001
   */
  bizId?: string;
  /**
   * @remarks
   * The notification channels in a JSON array string, such as ["sms","email"].
   * 
   * @example
   * ["sms","email"]
   */
  channelsJson?: string;
  /**
   * @remarks
   * The description of the scenario.
   * 
   * @example
   * cn_graph_prod
   */
  description?: string;
  /**
   * @remarks
   * The email notification fields in a JSON array string. A maximum of 10 fields are supported.
   * 
   * @example
   * {}
   */
  emailFieldsJson?: string;
  /**
   * @remarks
   * The email sending limit in a JSON string, including the minInterval and dailyLimit fields.
   * 
   * @example
   * {}
   */
  emailLimitJson?: string;
  /**
   * @remarks
   * The list of email recipient IDs in a JSON array string.
   * 
   * @example
   * {}
   */
  emailRecipientIdsJson?: string;
  /**
   * @remarks
   * The name of the scenario.
   * 
   * @example
   * 设备能力手册
   */
  name?: string;
  /**
   * @remarks
   * The list of SMS recipient IDs in a JSON array string.
   * 
   * @example
   * {}
   */
  phoneRecipientIdsJson?: string;
  /**
   * @remarks
   * The SMS notification fields in a JSON array string. A maximum of 3 fields are supported.
   * 
   * @example
   * {}
   */
  smsFieldsJson?: string;
  /**
   * @remarks
   * The SMS sending limit in a JSON string, including the minInterval and dailyLimit fields.
   * 
   * @example
   * {}
   */
  smsLimitJson?: string;
  /**
   * @remarks
   * The name of the monitored data table.
   * 
   * @example
   * default.ai_advertising_material_rec_train_v1103
   */
  tableName?: string;
  /**
   * @remarks
   * The trigger events in a JSON array string, such as ["INSERT","UPDATE","DELETE"].
   * 
   * @example
   * ["INSERT","UPDATE","DELETE"]
   */
  triggerEventsJson?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'BizId',
      channelsJson: 'ChannelsJson',
      description: 'Description',
      emailFieldsJson: 'EmailFieldsJson',
      emailLimitJson: 'EmailLimitJson',
      emailRecipientIdsJson: 'EmailRecipientIdsJson',
      name: 'Name',
      phoneRecipientIdsJson: 'PhoneRecipientIdsJson',
      smsFieldsJson: 'SmsFieldsJson',
      smsLimitJson: 'SmsLimitJson',
      tableName: 'TableName',
      triggerEventsJson: 'TriggerEventsJson',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      channelsJson: 'string',
      description: 'string',
      emailFieldsJson: 'string',
      emailLimitJson: 'string',
      emailRecipientIdsJson: 'string',
      name: 'string',
      phoneRecipientIdsJson: 'string',
      smsFieldsJson: 'string',
      smsLimitJson: 'string',
      tableName: 'string',
      triggerEventsJson: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

