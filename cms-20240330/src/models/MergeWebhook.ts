// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeWebhook extends $dara.Model {
  /**
   * @remarks
   * The content type.
   * 
   * @example
   * application/json
   */
  contentType?: string;
  /**
   * @remarks
   * An extension field used to store additional configurations.
   * 
   * @example
   * {"timeout": 3000}
   */
  extend?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The last modification time.
   * 
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtModified?: { [key: string]: any };
  /**
   * @remarks
   * The request header.
   * 
   * @example
   * {"Authorization": "Bearer abc123"}
   */
  headers?: string;
  /**
   * @remarks
   * The unique identifier of the webhook.
   * 
   * @example
   * webhook-12345
   */
  identifier?: string;
  /**
   * @remarks
   * The language preference.
   * 
   * @example
   * zh-CN
   */
  lang?: string;
  /**
   * @remarks
   * The HTTP request method.
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * The name of the webhook.
   * 
   * @example
   * 运维告警通知
   */
  name?: string;
  /**
   * @remarks
   * The source system of the webhook.
   * 
   * @example
   * dingtalk
   */
  source?: string;
  /**
   * @remarks
   * The type of the webhook. It indicates the destination platform.
   * 
   * @example
   * dingtalk
   */
  type?: string;
  /**
   * @remarks
   * The webhook URL used to send requests.
   * 
   * @example
   * https://oapi.dingtalk.com/robot/send?access_token=abc123
   */
  webhook?: string;
  static names(): { [key: string]: string } {
    return {
      contentType: 'contentType',
      extend: 'extend',
      gmtCreate: 'gmtCreate',
      gmtModified: 'gmtModified',
      headers: 'headers',
      identifier: 'identifier',
      lang: 'lang',
      method: 'method',
      name: 'name',
      source: 'source',
      type: 'type',
      webhook: 'webhook',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contentType: 'string',
      extend: 'string',
      gmtCreate: 'string',
      gmtModified: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      headers: 'string',
      identifier: 'string',
      lang: 'string',
      method: 'string',
      name: 'string',
      source: 'string',
      type: 'string',
      webhook: 'string',
    };
  }

  validate() {
    if(this.gmtModified) {
      $dara.Model.validateMap(this.gmtModified);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

