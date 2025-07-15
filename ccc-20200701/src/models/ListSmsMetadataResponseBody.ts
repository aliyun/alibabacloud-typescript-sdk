// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSmsMetadataResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 15772400000****
   */
  aliyunUid?: number;
  description?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  name?: string;
  /**
   * @example
   * MISSED_CALL_NOTIFICATION
   */
  scenario?: string;
  signName?: string;
  /**
   * @example
   * 5ffc1c9a-4d3d-4019-*****-73255fb01d1c
   */
  smsMetadataId?: string;
  /**
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
  list?: ListSmsMetadataResponseBodyDataList[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 100
   */
  pageSize?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListSmsMetadataResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  message?: string;
  params?: string[];
  /**
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

