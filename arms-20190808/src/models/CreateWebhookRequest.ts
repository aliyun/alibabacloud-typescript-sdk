// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWebhookRequest extends $dara.Model {
  /**
   * @remarks
   * The notification template that is sent when an alert is triggered. This parameter is required if the **Method** parameter is set to **Post**. You can use the $content placeholder to specify the notification content. The content cannot exceed 500 characters in length.
   * 
   * This parameter is required.
   * 
   * @example
   * { "Alert Name": "{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}", "Cluster Name": "{{ .commonLabels.clustername }} {{ end }}{{if eq " app" .commonLabels._aliyun_arms_involvedObject_kind }}", "Application Name": "{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}", "Notification Policy": "{{ .dispatchRuleName }}", "Alarm Time": "{{ .startTime }}", "Alert Content": "{{ for .alerts }} {{ .annotations.message }} {{ end }}" }
   */
  body?: string;
  /**
   * @remarks
   * The name of the contact.
   * 
   * This parameter is required.
   * 
   * @example
   * WebhookAlert
   */
  contactName?: string;
  /**
   * @remarks
   * The HTTP request header.
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
   * The HTTP request method.
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
   * { "Alert Name": "{{ .commonLabels.alertname }}{{if .commonLabels.clustername }}", "Cluster Name": "{{ .commonLabels.clustername }} {{ end }}{{if eq " app" .commonLabels._aliyun_arms_involvedObject_kind }}", "Application Name": "{{ .commonLabels._aliyun_arms_involvedObject_name }} {{ end }}", "Notification Policy": "{{ .dispatchRuleName }}", "Alarm Time": "{{ .startTime }}", "Alert Content": "{{ for .alerts }} {{ .annotations.message }} {{ end }}" }
   */
  recoverBody?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The URL of the request **method**.
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

