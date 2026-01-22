// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlertWebhookRequest extends $dara.Model {
  /**
   * @example
   * JSON
   */
  contentType?: string;
  /**
   * @remarks
   * headers
   */
  headers?: { [key: string]: string };
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
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * https://aliyun.com/test
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
      headers: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
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

