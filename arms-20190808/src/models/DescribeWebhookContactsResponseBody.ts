// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWebhookContactsResponseBodyPageBeanWebhookContactsWebhook extends $dara.Model {
  /**
   * @remarks
   * The header of the HTTP request.
   * 
   * @example
   * [{"Content-Type":"application/json"}]
   */
  bizHeaders?: { [key: string]: any };
  /**
   * @remarks
   * The parameters in the HTTP request.
   * 
   * @example
   * [{"content:"mike"}]
   */
  bizParams?: { [key: string]: any };
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
   * *   Get
   * *   Post
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
   * https://oapi.dingtalk.com/robot/send?access_token=91f2f6****
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
      bizHeaders: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      bizParams: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      body: 'string',
      method: 'string',
      recoverBody: 'string',
      url: 'string',
    };
  }

  validate() {
    if(this.bizHeaders) {
      $dara.Model.validateMap(this.bizHeaders);
    }
    if(this.bizParams) {
      $dara.Model.validateMap(this.bizParams);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebhookContactsResponseBodyPageBeanWebhookContacts extends $dara.Model {
  /**
   * @remarks
   * The details of the webhook alert contact.
   */
  webhook?: DescribeWebhookContactsResponseBodyPageBeanWebhookContactsWebhook;
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
   * Webhook name
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
      webhook: DescribeWebhookContactsResponseBodyPageBeanWebhookContactsWebhook,
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

export class DescribeWebhookContactsResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of alert contacts displayed on each page.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The total number of alert contacts.
   * 
   * @example
   * 1
   */
  total?: number;
  /**
   * @remarks
   * The list of webhook alert contacts.
   */
  webhookContacts?: DescribeWebhookContactsResponseBodyPageBeanWebhookContacts[];
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      total: 'Total',
      webhookContacts: 'WebhookContacts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      total: 'number',
      webhookContacts: { 'type': 'array', 'itemType': DescribeWebhookContactsResponseBodyPageBeanWebhookContacts },
    };
  }

  validate() {
    if(Array.isArray(this.webhookContacts)) {
      $dara.Model.validateArray(this.webhookContacts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWebhookContactsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned objects.
   */
  pageBean?: DescribeWebhookContactsResponseBodyPageBean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4D6C358A-A58B-4F4B-94CE-F5AAF023****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageBean: DescribeWebhookContactsResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

