// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishRecordsResponseBodyListResultData extends $dara.Model {
  /**
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @example
   * error
   */
  errorMessage?: string;
  /**
   * @example
   * 2024-10-10 10:10:10
   */
  finishTime?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModify?: string;
  /**
   * @example
   * 1241844456
   */
  id?: number;
  /**
   * @example
   * n_123456
   */
  nodeId?: string;
  /**
   * @example
   * 1234567
   */
  objectId?: string;
  /**
   * @example
   * 对象A
   */
  objectName?: string;
  /**
   * @example
   * 2024-10-10 10:00:00
   */
  objectType?: string;
  /**
   * @example
   * 1
   */
  objectVersion?: string;
  /**
   * @example
   * 1241844456
   */
  projectId?: string;
  /**
   * @example
   * test_lc__20241118171502
   */
  publishName?: string;
  /**
   * @example
   * 1
   */
  publishStatus?: number;
  /**
   * @example
   * 307999999
   */
  publisher?: string;
  /**
   * @example
   * 张三
   */
  publisherName?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      errorMessage: 'ErrorMessage',
      finishTime: 'FinishTime',
      gmtCreate: 'GmtCreate',
      gmtModify: 'GmtModify',
      id: 'Id',
      nodeId: 'NodeId',
      objectId: 'ObjectId',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      objectVersion: 'ObjectVersion',
      projectId: 'ProjectId',
      publishName: 'PublishName',
      publishStatus: 'PublishStatus',
      publisher: 'Publisher',
      publisherName: 'PublisherName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'number',
      errorMessage: 'string',
      finishTime: 'string',
      gmtCreate: 'string',
      gmtModify: 'string',
      id: 'number',
      nodeId: 'string',
      objectId: 'string',
      objectName: 'string',
      objectType: 'string',
      objectVersion: 'string',
      projectId: 'string',
      publishName: 'string',
      publishStatus: 'number',
      publisher: 'string',
      publisherName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListPublishRecordsResponseBodyListResult extends $dara.Model {
  data?: ListPublishRecordsResponseBodyListResultData[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListPublishRecordsResponseBodyListResultData },
      totalCount: 'number',
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

export class ListPublishRecordsResponseBody extends $dara.Model {
  /**
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  listResult?: ListPublishRecordsResponseBodyListResult;
  /**
   * @example
   * successful
   */
  message?: string;
  /**
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      listResult: 'ListResult',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      listResult: ListPublishRecordsResponseBodyListResult,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.listResult && typeof (this.listResult as any).validate === 'function') {
      (this.listResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

