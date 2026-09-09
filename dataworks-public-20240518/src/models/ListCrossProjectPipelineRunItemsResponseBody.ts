// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCrossProjectPipelineRunItemsResponseBodyDataPipelineRunItems extends $dara.Model {
  /**
   * @remarks
   * The change type.
   * 
   * @example
   * ADD
   */
  changeType?: string;
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * DeploymentItemFailed
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Deployment failed
   */
  errorMessage?: string;
  /**
   * @remarks
   * Indicates whether the object is a root object.
   * 
   * @example
   * true
   */
  isRoot?: boolean;
  /**
   * @remarks
   * The ID of the publish object.
   * 
   * @example
   * 1
   */
  objectId?: string;
  /**
   * @remarks
   * The name of the publish object.
   * 
   * @example
   * object-1
   */
  objectName?: string;
  /**
   * @remarks
   * The object type of the publish object.
   * 
   * @example
   * ODPS_SQL
   */
  objectType?: string;
  /**
   * @remarks
   * The version of the publish object.
   * 
   * @example
   * 7
   */
  objectVersion?: string;
  /**
   * @remarks
   * The ID of the parent object.
   * 
   * @example
   * 1
   */
  parentObjectId?: string;
  /**
   * @remarks
   * The status of the publish item.
   * 
   * @example
   * Ready
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      isRoot: 'IsRoot',
      objectId: 'ObjectId',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      objectVersion: 'ObjectVersion',
      parentObjectId: 'ParentObjectId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      errorCode: 'string',
      errorMessage: 'string',
      isRoot: 'boolean',
      objectId: 'string',
      objectName: 'string',
      objectType: 'string',
      objectVersion: 'string',
      parentObjectId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrossProjectPipelineRunItemsResponseBodyData extends $dara.Model {
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
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of publish items for the root objects and their child objects that are included in the cross-workspace publish pipeline.
   * 
   * @example
   * [{"ObjectId":"1","ObjectType":"ODPS_SQL","ObjectName":"object-1","ObjectVersion":"7","ChangeType":"ADD","IsRoot":true,"Status":"Ready"}]
   */
  pipelineRunItems?: ListCrossProjectPipelineRunItemsResponseBodyDataPipelineRunItems[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 735894D1-D5E5-50B8-8A6D-041C90A98B23
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      pipelineRunItems: 'PipelineRunItems',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      pipelineRunItems: { 'type': 'array', 'itemType': ListCrossProjectPipelineRunItemsResponseBodyDataPipelineRunItems },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pipelineRunItems)) {
      $dara.Model.validateArray(this.pipelineRunItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListCrossProjectPipelineRunItemsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The business response.
   * 
   * @example
   * {"RequestId":"735894D1-D5E5-50B8-8A6D-041C90A98B23","PageNumber":1,"PageSize":10,"TotalCount":1,"PipelineRunItems":[{"ObjectId":"1","ObjectType":"ODPS_SQL","ObjectName":"object-1","ObjectVersion":"7","ChangeType":"ADD","IsRoot":true,"Status":"Ready"}]}
   */
  data?: ListCrossProjectPipelineRunItemsResponseBodyData;
  /**
   * @remarks
   * The request ID, which is used to locate and troubleshoot this API call.
   * 
   * @example
   * 735894D1-D5E5-50B8-8A6D-041C90A98B23
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListCrossProjectPipelineRunItemsResponseBodyData,
      requestId: 'string',
      success: 'boolean',
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

