// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAlertWebhooksResponseBodyWebhooks extends $dara.Model {
  /**
   * @example
   * JSON
   */
  contentType?: string;
  /**
   * @remarks
   * headers
   * 
   * @example
   * key
   */
  headers?: { [key: string]: any };
  /**
   * @example
   * zh_CN
   */
  lang?: string;
  /**
   * @example
   * GET
   */
  method?: string;
  /**
   * @example
   * test
   */
  name?: string;
  /**
   * @example
   * http://aliyun.com/test
   */
  url?: string;
  /**
   * @example
   * test
   */
  webhookId?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      headers: 'headers',
      lang: 'lang',
      method: 'method',
      name: 'name',
      url: 'url',
      webhookId: 'webhookId',
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
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 8A33DBEA-*****-*****-*****-*****
   */
  requestId?: string;
  /**
   * @example
   * 8
   */
  total?: number;
  /**
   * @remarks
   * webhooks
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

