// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MergeWebhook extends $dara.Model {
  /**
   * @example
   * application/json
   */
  contentType?: string;
  /**
   * @example
   * {"timeout": 3000}
   */
  extend?: string;
  /**
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtCreate?: string;
  /**
   * @example
   * 2025-03-11T08:21:58.789Z
   */
  gmtModified?: { [key: string]: any };
  /**
   * @example
   * {"Authorization": "Bearer abc123"}
   */
  headers?: string;
  /**
   * @example
   * webhook-12345
   */
  identifier?: string;
  /**
   * @example
   * zh-CN
   */
  lang?: string;
  /**
   * @example
   * POST
   */
  method?: string;
  name?: string;
  /**
   * @example
   * dingtalk
   */
  source?: string;
  /**
   * @example
   * dingtalk
   */
  type?: string;
  /**
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

