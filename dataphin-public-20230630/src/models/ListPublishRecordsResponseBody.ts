// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPublishRecordsResponseBodyListResultData extends $dara.Model {
  /**
   * @remarks
   * The change type. Valid values: 0: create. 1: update. 2: delete.
   * 
   * @example
   * 0
   */
  changeType?: number;
  /**
   * @remarks
   * The publish error message.
   * 
   * @example
   * error
   */
  errorMessage?: string;
  /**
   * @remarks
   * The publish completion time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-10-10 10:10:10
   */
  finishTime?: string;
  /**
   * @remarks
   * The creation time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time. Format: yyyy-MM-dd HH:mm:ss.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  gmtModify?: string;
  /**
   * @remarks
   * The ID of the publish record. This is not the object ID and is globally unique in the publish list.
   * 
   * @example
   * 1241844456
   */
  id?: number;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * n_123456
   */
  nodeId?: string;
  /**
   * @remarks
   * The object ID.
   * 
   * @example
   * 1234567
   */
  objectId?: string;
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * Object A
   */
  objectName?: string;
  /**
   * @remarks
   * The object type.
   * 
   * @example
   * 2024-10-10 10:00:00
   */
  objectType?: string;
  /**
   * @remarks
   * The object version.
   * 
   * @example
   * 1
   */
  objectVersion?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 1241844456
   */
  projectId?: string;
  /**
   * @remarks
   * The publish name.
   * 
   * @example
   * test_lc__20241118171502
   */
  publishName?: string;
  /**
   * @remarks
   * The publish status. Valid values: 0: failed. 1: successful. 2: publishing.
   * 
   * @example
   * 1
   */
  publishStatus?: number;
  /**
   * @remarks
   * The ID of the publisher.
   * 
   * @example
   * 307999999
   */
  publisher?: string;
  /**
   * @remarks
   * The name of the publisher.
   * 
   * @example
   * Zhang San
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
   * The publish record list.
   */
  data?: ListPublishRecordsResponseBodyListResultData[];
  /**
   * @remarks
   * The total count.
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
   * The error code. A value of OK indicates that the request is normal.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code returned by the backend.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The query result.
   */
  listResult?: ListPublishRecordsResponseBodyListResult;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 75DD06F8-1661-5A6E-B0A6-7E23133BDC60
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

