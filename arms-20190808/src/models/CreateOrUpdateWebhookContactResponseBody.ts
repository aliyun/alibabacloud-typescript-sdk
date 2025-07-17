// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateOrUpdateWebhookContactResponseBodyWebhookContactWebhook extends $dara.Model {
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
   * The alert notification template.
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
   * @example
   * Post
   */
  method?: string;
  /**
   * @remarks
   * The notification template for clearing alerts.
   * 
   * @example
   * { "Alert name":"{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}", "Cluster name":"{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}", "Application name":"{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}", "Notification policy":"{{ .dispatchRuleName }}", "Recovery time":"{{ .endTime }}", "Alert content":"{{ for .alerts }} {{ .annotations.message }} {{ end }}" }
   */
  recoverBody?: string;
  /**
   * @remarks
   * The URL of the request method.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=e1a049121******
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      bizHeaders: 'BizHeaders',
      bizParams: 'BizParams',
      body: 'Body',
      method: 'Method',
      recoverBody: 'RecoverBody',
      url: 'Url',
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
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateWebhookContactResponseBodyWebhookContact extends $dara.Model {
  /**
   * @remarks
   * The information about the webhook alert contact.
   */
  webhook?: CreateOrUpdateWebhookContactResponseBodyWebhookContactWebhook;
  /**
   * @remarks
   * The ID of the webhook alert contact.
   * 
   * @example
   * 123
   */
  webhookId?: number;
  /**
   * @remarks
   * The name of the webhook alert contact.
   * 
   * @example
   * Webhook alert
   */
  webhookName?: string;
  static names(): { [key: string]: string } {
    return {
      webhook: 'Webhook',
      webhookId: 'WebhookId',
      webhookName: 'WebhookName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      webhook: CreateOrUpdateWebhookContactResponseBodyWebhookContactWebhook,
      webhookId: 'number',
      webhookName: 'string',
    };
  }

  validate() {
    if(this.webhook && typeof (this.webhook as any).validate === 'function') {
      (this.webhook as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateOrUpdateWebhookContactResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 16AF921B-8187-489F-9913-43C808B4****
   */
  requestId?: string;
  /**
   * @remarks
   * The returned webhook alert contact.
   */
  webhookContact?: CreateOrUpdateWebhookContactResponseBodyWebhookContact;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webhookContact: 'WebhookContact',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webhookContact: CreateOrUpdateWebhookContactResponseBodyWebhookContact,
    };
  }

  validate() {
    if(this.webhookContact && typeof (this.webhookContact as any).validate === 'function') {
      (this.webhookContact as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

