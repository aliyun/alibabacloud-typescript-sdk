// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertNotifyTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  alertNotifyTemplateId?: string;
  /**
   * @example
   * test
   */
  alertNotifyTemplateName?: string;
  /**
   * @example
   * GO
   */
  programLang?: string;
  /**
   * @example
   * {"zh":{"title":"云监控报警: {{.incident.title}}","content":"**报警标题:** {{.incident.title}}\\n**级别:** {{.incident.severity}}\\n**事件数:** {{len .events}}","incidentLifeCycleNotifyTemplates":"{\\"IncidentCreationNotify\\":{\\"title\\":\\"云监控报警: {{.incident.title}}\\",\\"content\\":\\"**报警标题:** {{.incident.title}}\\\\n**级别:** {{.incident.severity}}\\",\\"enable\\":true},\\"IncidentResolutionNotify\\":{\\"title\\":\\"云监控报警已解决: {{.incident.title}}\\",\\"content\\":\\"**报警标题:** {{.incident.title}}\\\\n**级别:** {{.incident.severity}}\\",\\"enable\\":true}}"},"en":{"title":"CloudMonitor Alert: {{.incident.title}}","content":"**Alert Title:** {{.incident.title}}\\n**Severity:** {{.incident.severity}}\\n**Events:** {{len .events}}","incidentLifeCycleNotifyTemplates":"{\\"IncidentCreationNotify\\":{\\"title\\":\\"CloudMonitor Alert: {{.incident.title}}\\",\\"content\\":\\"**Alert Title:** {{.incident.title}}\\\\n**Severity:** {{.incident.severity}}\\",\\"enable\\":true},\\"IncidentResolutionNotify\\":{\\"title\\":\\"CloudMonitor Alert Resolved: {{.incident.title}}\\",\\"content\\":\\"**Alert Title:** {{.incident.title}}\\\\n**Severity:** {{.incident.severity}}\\",\\"enable\\":true}}"}}
   */
  templates?: { [key: string]: {[key: string]: any} };
  /**
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

