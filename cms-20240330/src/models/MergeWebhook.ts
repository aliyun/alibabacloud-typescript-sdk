// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeWebhook extends $dara.Model {
  /**
   * @remarks
   * 内容类型。
   * 
   * @example
   * application/json
   */
  contentType?: string;
  /**
   * @remarks
   * 扩展字段，用于存储额外配置。
   * 
   * @example
   * {"timeout": 3000}
   */
  extend?: string;
  /**
   * @remarks
   * 创建时间。
   * 
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtCreate?: string;
  /**
   * @remarks
   * 最后修改时间。
   * 
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtModified?: { [key: string]: any };
  /**
   * @remarks
   * 请求头信息。
   * 
   * @example
   * {"Authorization": "Bearer abc123"}
   */
  headers?: string;
  /**
   * @remarks
   * Webhook 唯一标识符。
   * 
   * @example
   * webhook-12345
   */
  identifier?: string;
  /**
   * @remarks
   * 语言偏好。
   * 
   * @example
   * zh-CN
   */
  lang?: string;
  /**
   * @remarks
   * HTTP 请求方法。
   * 
   * @example
   * POST
   */
  method?: string;
  /**
   * @remarks
   * Webhook 名称。
   * 
   * @example
   * 运维告警通知
   */
  name?: string;
  /**
   * @remarks
   * Webhook 来源系统。
   * 
   * @example
   * dingtalk
   */
  source?: string;
  /**
   * @remarks
   * Webhook 类型，表示其目标平台。
   * 
   * @example
   * dingtalk
   */
  type?: string;
  /**
   * @remarks
   * Webhook 地址，用于发送请求。
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

