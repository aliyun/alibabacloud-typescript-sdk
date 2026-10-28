// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertNotifyTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the notification template.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  alertNotifyTemplateId?: string;
  /**
   * @remarks
   * The name of the notification template.
   * 
   * @example
   * test
   */
  alertNotifyTemplateName?: string;
  /**
   * @remarks
   * The template syntax type. Currently, only Go is supported. Templates in the title and content fields use the Go template syntax.
   * 
   * @example
   * GO
   */
  programLang?: string;
  /**
   * @remarks
   * The multilingual notification templates. The key is the language code: zh for Chinese and en for English. The value is the template configuration object for the specified language. When a notification is sent, the corresponding template is selected based on the recipient\\"s language. The content format varies by type: Markdown for DING, WEIXIN, and FEISHU; HTML for EMAIL; plain text for SMS, CALL, and SLACK; and JSON for CUSTOM.
   * 
   * @example
   * {"zh":{"title":"CloudMonitor Alert: {{.incident.title}}","content":"**Alert Title:** {{.incident.title}}\\n**Severity:** {{.incident.severity}}\\n**Events:** {{len .events}}","incidentLifeCycleNotifyTemplates":"{\\"IncidentCreationNotify\\":{\\"title\\":\\"CloudMonitor Alert: {{.incident.title}}\\",\\"content\\":\\"**Alert Title:** {{.incident.title}}\\\\n**Severity:** {{.incident.severity}}\\",\\"enable\\":true},\\"IncidentResolutionNotify\\":{\\"title\\":\\"CloudMonitor Alert Resolved: {{.incident.title}}\\",\\"content\\":\\"**Alert Title:** {{.incident.title}}\\\\n**Severity:** {{.incident.severity}}\\",\\"enable\\":true}}"},"en":{"title":"CloudMonitor Alert: {{.incident.title}}","content":"**Alert Title:** {{.incident.title}}\\n**Severity:** {{.incident.severity}}\\n**Events:** {{len .events}}","incidentLifeCycleNotifyTemplates":"{\\"IncidentCreationNotify\\":{\\"title\\":\\"CloudMonitor Alert: {{.incident.title}}\\",\\"content\\":\\"**Alert Title:** {{.incident.title}}\\\\n**Severity:** {{.incident.severity}}\\",\\"enable\\":true},\\"IncidentResolutionNotify\\":{\\"title\\":\\"CloudMonitor Alert Resolved: {{.incident.title}}\\",\\"content\\":\\"**Alert Title:** {{.incident.title}}\\\\n**Severity:** {{.incident.severity}}\\",\\"enable\\":true}}"}}
   */
  templates?: { [key: string]: {[key: string]: any} };
  /**
   * @remarks
   * The notification channel type. Valid values:
   * - DING
   * - WEIXIN
   * - FEISHU
   * - SLACK
   * - CUSTOM
   * - TEAMS
   * - SMS
   * - EMAIL
   * - CALL
   * - PAGER_DUTY
   * 
   * @example
   * DING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertNotifyTemplateId: 'alertNotifyTemplateId',
      alertNotifyTemplateName: 'alertNotifyTemplateName',
      programLang: 'programLang',
      templates: 'templates',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNotifyTemplateId: 'string',
      alertNotifyTemplateName: 'string',
      programLang: 'string',
      templates: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
      type: 'string',
    };
  }

  validate() {
    if(this.templates) {
      $dara.Model.validateMap(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

