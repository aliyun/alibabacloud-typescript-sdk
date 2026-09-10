// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertWebhookRequest extends $dara.Model {
  /**
   * @remarks
   * The content type of the data. Valid values:
   * - JSON (default)
   * - FORM
   * 
   * @example
   * JSON
   */
  contentType?: string;
  /**
   * @remarks
   * The collection of HTTP request headers.
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The language. Valid values:
   * - zh_CN
   * - en_US
   * 
   * @example
   * zh_CN
   */
  lang?: string;
  /**
   * @remarks
   * The request method. Valid values:
   * - GET
   * - POST
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The webhook name.
   * 
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The alert callback URL.
   * 
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/test
   */
  url?: string;
  /**
   * @remarks
   * The unique identifier of the webhook.
   * 
   * @example
   * test
   */
  webhookId?: string;
  /**
   * @remarks
   * The workspace identifier.
   * 
   * @example
   * my-workspace
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      headers: 'headers',
      lang: 'lang',
      method: 'method',
      name: 'name',
      url: 'url',
      webhookId: 'webhookId',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      lang: 'string',
      method: 'string',
      name: 'string',
      url: 'string',
      webhookId: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(this.headers) {
      $dara.Model.validateMap(this.headers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

