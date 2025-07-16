// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationResponseBodyData extends $dara.Model {
  /**
   * @example
   * {\\"ODIN_TOPIC_ID\\":\\"256\\"}
   */
  appConfig?: string;
  /**
   * @example
   * APP_XCxxx
   */
  appType?: string;
  /**
   * @example
   * ONLINE
   */
  applicationStatus?: string;
  /**
   * @example
   * ding5xxx
   */
  corpId?: string;
  /**
   * @example
   * 123456
   */
  creatorUserId?: string;
  /**
   * @example
   * 小明创建的宜搭应用
   */
  description?: string;
  /**
   * @example
   * appdiqiu%%#0089FF
   */
  icon?: string;
  /**
   * @example
   * y
   */
  inexistence?: string;
  /**
   * @example
   * app
   */
  name?: string;
  /**
   * @example
   * ding5xxx
   */
  subCorpId?: string;
  static names(): { [key: string]: string } {
    return {
      appConfig: 'AppConfig',
      appType: 'AppType',
      applicationStatus: 'ApplicationStatus',
      corpId: 'CorpId',
      creatorUserId: 'CreatorUserId',
      description: 'Description',
      icon: 'Icon',
      inexistence: 'Inexistence',
      name: 'Name',
      subCorpId: 'SubCorpId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appConfig: 'string',
      appType: 'string',
      applicationStatus: 'string',
      corpId: 'string',
      creatorUserId: 'string',
      description: 'string',
      icon: 'string',
      inexistence: 'string',
      name: 'string',
      subCorpId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListApplicationResponseBody extends $dara.Model {
  /**
   * @example
   * [{}]
   */
  data?: ListApplicationResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
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
      data: 'data',
      pageNumber: 'pageNumber',
      requestId: 'requestId',
      totalCount: 'totalCount',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListApplicationResponseBodyData },
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
      vendorRequestId: 'string',
      vendorType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

