// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBatchTaskVersionsResponseBodyDataBatchTaskVersionList extends $dara.Model {
  /**
   * @remarks
   * The comment for the submission.
   * 
   * @example
   * test
   */
  comment?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2024-10-10 10:10:10
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The update time.
   * 
   * @example
   * 2024-10-10 10:10:10
   */
  gmtModified?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * n_10231001
   */
  nodeId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 10232111011
   */
  projectId?: number;
  /**
   * @remarks
   * Indicates whether the version has been published to the production environment.
   */
  published?: boolean;
  /**
   * @remarks
   * The ID of the user who submitted the version.
   * 
   * @example
   * 20110110
   */
  userId?: string;
  /**
   * @remarks
   * The ID of the user who submitted the version.
   * 
   * @example
   * 张三
   */
  userName?: string;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      published: 'Published',
      userId: 'UserId',
      userName: 'UserName',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      nodeId: 'string',
      projectId: 'number',
      published: 'boolean',
      userId: 'string',
      userName: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskVersionsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of batch task versions.
   */
  batchTaskVersionList?: GetBatchTaskVersionsResponseBodyDataBatchTaskVersionList[];
  static names(): { [key: string]: string } {
    return {
      batchTaskVersionList: 'BatchTaskVersionList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchTaskVersionList: { 'type': 'array', 'itemType': GetBatchTaskVersionsResponseBodyDataBatchTaskVersionList },
    };
  }

  validate() {
    if(Array.isArray(this.batchTaskVersionList)) {
      $dara.Model.validateArray(this.batchTaskVersionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetBatchTaskVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The error code. A value of OK indicates that the request was successful.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The request result.
   */
  data?: GetBatchTaskVersionsResponseBodyData;
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
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetBatchTaskVersionsResponseBodyData,
      httpStatusCode: 'number',
      message: 'string',
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

