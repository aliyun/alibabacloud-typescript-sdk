// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertNotifyTemplateRequest extends $dara.Model {
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
   * The multilingual notification templates. The key is the language code: zh for Chinese and en for English. The value is the template configuration object for the specified language. When a notification is sent, the corresponding template is selected based on the recipient\\"s language. The body format varies by type: Markdown for DING, WEIXIN, and FEISHU; HTML for EMAIL; plain text for SMS, CALL, and SLACK; and JSON for CUSTOM.
   * 
   * @example
   * {"zh":{"title":"云监控报警: {{.incident.title}}","content":"**报警标题:** {{.incident.title}}\\n**级别:** {{.incident.severity}}\\n**事件数:** {{len .events}}","incidentLifeCycleNotifyTemplates":"{\\"IncidentCreationNotify\\":{\\"title\\":\\"云监控报警: {{.incident.title}}\\",\\"content\\":\\"**报警标题:** {{.incident.title}}\\\\n**级别:** {{.incident.severity}}\\",\\"enable\\":true},\\"IncidentResolutionNotify\\":{\\"title\\":\\"云监控报警已解决: {{.incident.title}}\\",\\"content\\":\\"**报警标题:** {{.incident.title}}\\\\n**级别:** {{.incident.severity}}\\",\\"enable\\":true}}"},"en":{"title":"CloudMonitor Alert: {{.incident.title}}","content":"**Alert Title:** {{.incident.title}}\\n**Severity:** {{.incident.severity}}\\n**Events:** {{len .events}}","incidentLifeCycleNotifyTemplates":"{\\"IncidentCreationNotify\\":{\\"title\\":\\"CloudMonitor Alert: {{.incident.title}}\\",\\"content\\":\\"**Alert Title:** {{.incident.title}}\\\\n**Severity:** {{.incident.severity}}\\",\\"enable\\":true},\\"IncidentResolutionNotify\\":{\\"title\\":\\"CloudMonitor Alert Resolved: {{.incident.title}}\\",\\"content\\":\\"**Alert Title:** {{.incident.title}}\\\\n**Severity:** {{.incident.severity}}\\",\\"enable\\":true}}"}}
   */
  templates?: { [key: string]: {[key: string]: any} };
  static names(): { [key: string]: string } {
    return {
      alertNotifyTemplateName: 'alertNotifyTemplateName',
      templates: 'templates',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNotifyTemplateName: 'string',
      templates: { 'type': 'map', 'keyType': 'string', 'valueType': '{[key: string]: any}' },
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

