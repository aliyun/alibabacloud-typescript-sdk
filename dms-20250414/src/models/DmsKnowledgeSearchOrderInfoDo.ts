// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DmsKnowledgeSearchOrderInfoDO extends $dara.Model {
  /**
   * @remarks
   * The UID of the Alibaba Cloud account.
   */
  aliyunAccountUid?: string;
  /**
   * @remarks
   * The API key used for authentication.
   */
  apiKey?: string;
  /**
   * @remarks
   * The time when the entry was created.
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The time when the entry was last modified.
   */
  gmtModified?: string;
  /**
   * @remarks
   * The unique ID of the entry.
   */
  id?: number;
  /**
   * @remarks
   * The unique ID of the order.
   */
  orderId?: string;
  /**
   * @remarks
   * The endpoint URL for the web search API.
   */
  webSearchApiUrl?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunAccountUid: 'AliyunAccountUid',
      apiKey: 'ApiKey',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      orderId: 'OrderId',
      webSearchApiUrl: 'WebSearchApiUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunAccountUid: 'string',
      apiKey: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      orderId: 'string',
      webSearchApiUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

