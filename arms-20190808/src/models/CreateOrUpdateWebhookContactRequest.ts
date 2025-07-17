// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateWebhookContactRequest extends $dara.Model {
  /**
   * @remarks
   * The HTTP request headers.
   * 
   * @example
   * [{"Content-Type":"application/json;charset=utf-8"}]
   */
  bizHeaders?: string;
  /**
   * @remarks
   * The parameters in the HTTP request.
   * 
   * @example
   * [{"content":"mike"}]
   */
  bizParams?: string;
  /**
   * @remarks
   * The notification template that is sent when an alert is triggered. This parameter is required if the **Method** parameter is set to **Post**. You can use the `$content` placeholder to specify the notification content. The content cannot exceed 500 characters in length. For more information, see [Variable description of a notification template](https://help.aliyun.com/document_detail/251834.html).\\\\
   * 
   * @example
   * { "Alert name":"{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}", "Cluster name":"{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}", "Application name":"{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}", "Notification policy":"{{ .dispatchRuleName }}", "Alert time":"{{ .startTime }}", "Alert content":"{{ for .alerts }} {{ .annotations.message }} {{ end }}" }
   */
  body?: string;
  /**
   * @remarks
   * The HTTP request method.
   * 
   * *   Post
   * *   Get
   * 
   * This parameter is required.
   * 
   * @example
   * Post
   */
  method?: string;
  /**
   * @remarks
   * The notification template that is sent when an alert is resolved. This parameter is required if the **Method** parameter is set to **Post**. You can use the `$content` placeholder to specify the notification content. The content cannot exceed 500 characters in length. For more information, see [Variable description of a notification template](https://help.aliyun.com/document_detail/251834.html).
   * 
   * @example
   * { "Alert name":"{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}", "Cluster name":"{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}", "Application name":"{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}", "Notification policy":"{{ .dispatchRuleName }}", "Recovery time":"{{ .endTime }}", "Alert content":"{{ for .alerts }} {{ .annotations.message }} {{ end }}" }
   */
  recoverBody?: string;
  /**
   * @remarks
   * The URL of the HTTP request **method**.
   * 
   * This parameter is required.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=e1a049121******
   */
  url?: string;
  /**
   * @remarks
   * The ID of the webhook alert contact.
   * 
   * *   If you do not specify this parameter, a new webhook alert contact is created.
   * * If you specify this parameter, the specified webhook alert contact is modified.
   * 
   * @example
   * 123
   */
  webhookId?: number;
  /**
   * @remarks
   * The name of the webhook alert contact.
   * 
   * This parameter is required.
   * 
   * @example
   * Webhook alert
   */
  webhookName?: string;
  static names(): { [key: string]: string } {
    return {
      bizHeaders: 'BizHeaders',
      bizParams: 'BizParams',
      body: 'Body',
      method: 'Method',
      recoverBody: 'RecoverBody',
      url: 'Url',
      webhookId: 'WebhookId',
      webhookName: 'WebhookName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizHeaders: 'string',
      bizParams: 'string',
      body: 'string',
      method: 'string',
      recoverBody: 'string',
      url: 'string',
      webhookId: 'number',
      webhookName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

