// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceArmsAlertConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  armsAlertsEnable?: string;
  armsAlertsWebhookUrl?: string;
  static names(): { [key: string]: string } {
    return {
      armsAlertsEnable: 'armsAlertsEnable',
      armsAlertsWebhookUrl: 'armsAlertsWebhookUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      armsAlertsEnable: 'string',
      armsAlertsWebhookUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

