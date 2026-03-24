// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertWebhooksResponseBodyWebhooks extends $dara.Model {
  /**
   * @remarks
   * The content type of the data. Valid values:
   * 
   * - JSON
   * 
   * - FORM
   * 
   * @example
   * JSON
   */
  contentType?: string;
  /**
   * @remarks
   * The headers.
   * 
   * @example
   * key
   */
  headers?: { [key: string]: any };
  /**
   * @remarks
   * The language. Valid values:
   * 
   * - zh_CN
   * 
   * - en_US
   * 
   * @example
   * zh_CN
   */
  lang?: string;
  /**
   * @remarks
   * The request method. Valid values:
   * 
   * - GET
   * 
   * - POST
   * 
   * @example
   * GET
   */
  method?: string;
  /**
   * @remarks
   * The name of the webhook.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The URL of the alert callback.
   * 
   * @example
   * http://aliyun.com/test
   */
  url?: string;
  /**
   * @remarks
   * The unique ID of the webhook.
   * 
   * @example
   * test
   */
  webhookId?: string;
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
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
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

export class ListAlertWebhooksResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number. The default value is 1.
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
   * 8A33DBEA-*****-*****-*****-*****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 8
   */
  total?: number;
  /**
   * @remarks
   * The webhooks.
   */
  webhooks?: ListAlertWebhooksResponseBodyWebhooks[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      requestId: 'requestId',
      total: 'total',
      webhooks: 'webhooks',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      total: 'number',
      webhooks: { 'type': 'array', 'itemType': ListAlertWebhooksResponseBodyWebhooks },
    };
  }

  validate() {
    if(Array.isArray(this.webhooks)) {
      $dara.Model.validateArray(this.webhooks);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

