// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFunctionMetasResponseBodyDataList extends $dara.Model {
  /**
   * @example
   * 15772400000****
   */
  aliyunUid?: string;
  /**
   * @example
   * 王先生
   */
  description?: string;
  /**
   * @example
   * cn-shanghai
   */
  failoverRegion?: string;
  /**
   * @example
   * 5
   */
  failoverRegionWeight?: number;
  /**
   * @example
   * 4bbcd898-xxxxx-47e5-85bb-718166
   */
  functionMetaId?: string;
  /**
   * @example
   * sql_hra
   */
  functionName?: string;
  /**
   * @example
   * http://xxxx
   */
  httpTriggerUrl?: string;
  /**
   * @example
   * ccc-test
   */
  instanceId?: string;
  /**
   * @example
   * cn-beijing
   */
  region?: number;
  /**
   * @example
   * logical
   */
  role?: string;
  /**
   * @example
   * url_detection_pro
   */
  service?: string;
  static names(): { [key: string]: string } {
    return {
      aliyunUid: 'AliyunUid',
      description: 'Description',
      failoverRegion: 'FailoverRegion',
      failoverRegionWeight: 'FailoverRegionWeight',
      functionMetaId: 'FunctionMetaId',
      functionName: 'FunctionName',
      httpTriggerUrl: 'HttpTriggerUrl',
      instanceId: 'InstanceId',
      region: 'Region',
      role: 'Role',
      service: 'Service',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunUid: 'string',
      description: 'string',
      failoverRegion: 'string',
      failoverRegionWeight: 'number',
      functionMetaId: 'string',
      functionName: 'string',
      httpTriggerUrl: 'string',
      instanceId: 'string',
      region: 'number',
      role: 'string',
      service: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListFunctionMetasResponseBodyData extends $dara.Model {
  list?: ListFunctionMetasResponseBodyDataList[];
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
   * 2
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
      list: { 'type': 'array', 'itemType': ListFunctionMetasResponseBodyDataList },
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

export class ListFunctionMetasResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  data?: ListFunctionMetasResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 无
   */
  message?: string;
  /**
   * @example
   * 26D1277F-55BF-453E-A6B2-02B7E6F97699
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: ListFunctionMetasResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

