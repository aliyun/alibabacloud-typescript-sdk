// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DmsKnowledgeSearchOrderInfoDO extends $dara.Model {
  aliyunAccountUid?: string;
  apiKey?: string;
  gmtCreate?: string;
  gmtModified?: string;
  id?: number;
  orderId?: string;
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

