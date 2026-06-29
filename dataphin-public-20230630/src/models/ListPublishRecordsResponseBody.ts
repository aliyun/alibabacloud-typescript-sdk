// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishRecordsResponseBodyListResultData extends $dara.Model {
  /**
   * @remarks
   * Change type. Valid values: 0: Create. 1: Update. 2: Delete.
   * 
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @remarks
   * Publish error message.
   * 
   * @example
   * error
   */
  errorMessage?: string;
  /**
   * @remarks
   * Publish completion time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2024-10-10 10:10:10
   */
  finishTime?: string;
  /**
   * @remarks
   * Creation time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * Modification time in the yyyy-MM-dd HH:mm:ss format.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModify?: string;
  /**
   * @remarks
   * Publish record ID, which is not the object ID and is globally unique in the publish list.
   * 
   * @example
   * 1241844456
   */
  id?: number;
  /**
   * @remarks
   * Node ID.
   * 
   * @example
   * n_123456
   */
  nodeId?: string;
  /**
   * @remarks
   * Object ID.
   * 
   * @example
   * 1234567
   */
  objectId?: string;
  /**
   * @remarks
   * Object name.
   * 
   * @example
   * 对象A
   */
  objectName?: string;
  /**
   * @remarks
   * Object type.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  objectType?: string;
  /**
   * @remarks
   * Object version.
   * 
   * @example
   * 1
   */
  objectVersion?: string;
  /**
   * @remarks
   * Project ID.
   * 
   * @example
   * 1241844456
   */
  projectId?: string;
  /**
   * @remarks
   * Publish name.
   * 
   * @example
   * test_lc__20241118171502
   */
  publishName?: string;
  /**
   * @remarks
   * Publish status. Valid values: 0: Failed. 1: Succeeded. 2: Publishing.
   * 
   * @example
   * 1
   */
  publishStatus?: number;
  /**
   * @remarks
   * Publisher ID.
   * 
   * @example
   * 307999999
   */
  publisher?: string;
  /**
   * @remarks
   * Publisher name.
   * 
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
  /**
   * @remarks
   * Publish record list.
   */
  data?: ListPublishRecordsResponseBodyListResultData[];
  /**
   * @remarks
   * Total count.
   * 
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
   * @remarks
   * Error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Backend response HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Query result.
   */
  listResult?: ListPublishRecordsResponseBodyListResult;
  /**
   * @remarks
   * Error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
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

