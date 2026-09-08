// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmsMetadataResponseBodyDataList extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 15772400000****
   */
  aliyunUid?: number;
  /**
   * @remarks
   * The description of the configuration.
   * 
   * @example
   * 漏话短信配置
   */
  description?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the configuration.
   * 
   * @example
   * 漏话短信提醒
   */
  name?: string;
  /**
   * @remarks
   * The scenario type.
   * 
   * @example
   * MISSED_CALL_NOTIFICATION
   */
  scenario?: string;
  /**
   * @remarks
   * The name of the SMS signature.
   * 
   * @example
   * 云呼叫中心
   */
  signName?: string;
  /**
   * @remarks
   * The ID of the SMS configuration.
   * 
   * @example
   * 5ffc1c9a-4d3d-4019-*****-73255fb01d1c
   */
  smsMetadataId?: string;
  /**
   * @remarks
   * The template code.
   * 
   * @example
   * SMS_468xxxx298
   */
  templateCode?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      scenario: 'Scenario',
      signName: 'SignName',
      smsMetadataId: 'SmsMetadataId',
      templateCode: 'TemplateCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'number',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      scenario: 'string',
      signName: 'string',
      smsMetadataId: 'string',
      templateCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsMetadataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of SMS configurations.
   */
  list?: ListSmsMetadataResponseBodyDataList[];
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 100
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 200
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: { 'type': 'array', 'itemType': ListSmsMetadataResponseBodyDataList },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.list)) {
      $dara.Model.validateArray(this.list);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSmsMetadataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: ListSmsMetadataResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * 无
   */
  message?: string;
  /**
   * @remarks
   * The list of incorrect parameters.
   */
  params?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8707EB29-BAED-4302-B999-40BA61877437
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      params: 'Params',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListSmsMetadataResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      params: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    if(Array.isArray(this.params)) {
      $dara.Model.validateArray(this.params);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

