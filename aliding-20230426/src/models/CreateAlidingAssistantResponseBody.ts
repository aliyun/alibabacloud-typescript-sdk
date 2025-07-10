// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAlidingAssistantResponseBody extends $dara.Model {
  /**
   * @example
   * 123456
   */
  alidingAssistantId?: string;
  appCode?: string;
  /**
   * @example
   * https://www.baidu.com
   */
  jumpUrl?: string;
  processInstanceId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      alidingAssistantId: 'alidingAssistantId',
      appCode: 'appCode',
      jumpUrl: 'jumpUrl',
      processInstanceId: 'processInstanceId',
      requestId: 'requestId',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alidingAssistantId: 'string',
      appCode: 'string',
      jumpUrl: 'string',
      processInstanceId: 'string',
      requestId: 'string',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

