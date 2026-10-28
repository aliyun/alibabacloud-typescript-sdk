// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertNotifyTemplatesResponseBodyAlertNotifyTemplates extends $dara.Model {
  /**
   * @remarks
   * The notification template ID.
   * 
   * @example
   * template-abc123
   */
  alertNotifyTemplateId?: string;
  /**
   * @remarks
   * The notification template name.
   * 
   * @example
   * High-availability alert template
   */
  alertNotifyTemplateName?: string;
  /**
   * @remarks
   * The template syntax type. The current template syntax is fixed to GO and uses the Go template syntax.
   * 
   * @example
   * GO
   */
  programLang?: string;
  /**
   * @remarks
   * The multilingual notification templates. The key is the language code: zh (Chinese) or en (English). The value is the template configuration object for the language. When a notification is sent, the corresponding template is selected based on the recipient\\"s language. The content format varies by type: Markdown for DING, WEIXIN, and FEISHU; HTML for EMAIL; plain text for SMS, CALL, and SLACK; and JSON for CUSTOM.
   * 
   * @example
   * {"zh":{"title":"CloudMonitor Alert: {{.incident.title}}","content":"**Alert Title:** {{.incident.title}}\\n**Severity:** {{.incident.severity}}\\n**Events:** {{len .events}}","incidentLifeCycleNotifyTemplates":{"IncidentCreationNotify":{"title":"CloudMonitor Alert: {{.incident.title}}","content":"**Alert Title:** {{.incident.title}}\\n**Severity:** {{.incident.severity}}","enable":true},"IncidentResolutionNotify":{"title":"CloudMonitor Alert Resolved: {{.incident.title}}","content":"**Alert Title:** {{.incident.title}}\\n**Severity:** {{.incident.severity}}","enable":true}}},"en":{"title":"CloudMonitor Alert: {{.incident.title}}","content":"**Alert Title:** {{.incident.title}}\\n**Severity:** {{.incident.severity}}\\n**Events:** {{len .events}}","incidentLifeCycleNotifyTemplates":{"IncidentCreationNotify":{"title":"CloudMonitor Alert: {{.incident.title}}","content":"**Alert Title:** {{.incident.title}}\\n**Severity:** {{.incident.severity}}","enable":true},"IncidentResolutionNotify":{"title":"CloudMonitor Alert Resolved: {{.incident.title}}","content":"**Alert Title:** {{.incident.title}}\\n**Severity:** {{.incident.severity}}","enable":true}}}}
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

export class ListAlertNotifyTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of notification templates.
   */
  alertNotifyTemplates?: ListAlertNotifyTemplatesResponseBodyAlertNotifyTemplates[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The page size.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * CD8BA7D6-995D-578D-9941-**********
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 33
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      alertNotifyTemplates: 'alertNotifyTemplates',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNotifyTemplates: { 'type': 'array', 'itemType': ListAlertNotifyTemplatesResponseBodyAlertNotifyTemplates },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertNotifyTemplates)) {
      $dara.Model.validateArray(this.alertNotifyTemplates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

