// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAlertWebhookRequest extends $dara.Model {
  /**
   * @remarks
   * The content type of the data. Supported values:
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
   */
  headers?: { [key: string]: string };
  /**
   * @remarks
   * The language. Supported values:
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
   * The request method. Supported values:
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
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      headers: 'headers',
      lang: 'lang',
      method: 'method',
      name: 'name',
      url: 'url',
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

