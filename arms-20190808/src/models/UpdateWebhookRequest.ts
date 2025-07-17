// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWebhookRequest extends $dara.Model {
  /**
   * @remarks
   * The notification template that is sent when an alert is triggered. This parameter is required if the **Method** parameter is set to **Post**. You can use the $content placeholder to specify the notification content. The content cannot exceed 500 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * { "Alert name":"{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}", "Cluster name":"{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}", "Application name":"{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}", "Notification policy":"{{ .dispatchRuleName }}", "Alert time":"{{ .startTime }}", "Alert content":"{{ for .alerts }} {{ .annotations.message }} {{ end }}" }
   */
  body?: string;
  /**
   * @remarks
   * The ID of the webhook alert contact. You can call the **SearchAlertContact** operation to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 48716
   */
  contactId?: number;
  /**
   * @remarks
   * The name of the webhook alert contact.
   * 
   * This parameter is required.
   * 
   * @example
   * Webhook alert
   */
  contactName?: string;
  /**
   * @remarks
   * The HTTP request headers.
   * 
   * @example
   * [{"Content-Type":"application/json"}]
   */
  httpHeaders?: string;
  /**
   * @remarks
   * The parameters in the HTTP request.
   * 
   * @example
   * [{"name":"mike"}]
   */
  httpParams?: string;
  /**
   * @remarks
   * The HTTP request method. Valid values:
   * 
   * *   `Get`
   * *   `Post`
   * 
   * This parameter is required.
   * 
   * @example
   * Post
   */
  method?: string;
  /**
   * @remarks
   * The notification template that is sent when an alert is resolved. This parameter is required if the **Method** parameter is set to **Post**. You can use the $content placeholder to specify the notification content. The content cannot exceed 500 characters in length.
   * 
   * @example
   * { "Alert name":"{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}", "Cluster name":"{{ .commonLabels.clustername }} {{ end }}{{if eq "app" .commonLabels._aliyun_arms_involvedObject_kind }}", "Application name":"{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}", "Notification policy":"{{ .dispatchRuleName }}", "Recovery time":"{{ .endTime }}", "Alert content":"{{ for .alerts }} {{ .annotations.message }} {{ end }}" }
   */
  recoverBody?: string;
  /**
   * @remarks
   * The ID of the region.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The URL of the HTTP request method.
   * 
   * This parameter is required.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=e1a049121ddbfce1ca963d115ef88cc7219583c4fb79fe6e398fbfb688******
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      body: 'Body',
      contactId: 'ContactId',
      contactName: 'ContactName',
      httpHeaders: 'HttpHeaders',
      httpParams: 'HttpParams',
      method: 'Method',
      recoverBody: 'RecoverBody',
      regionId: 'RegionId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'string',
      contactId: 'number',
      contactName: 'string',
      httpHeaders: 'string',
      httpParams: 'string',
      method: 'string',
      recoverBody: 'string',
      regionId: 'string',
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

