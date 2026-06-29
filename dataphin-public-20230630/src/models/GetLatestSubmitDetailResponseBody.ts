// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObjectSubmitObject extends $dara.Model {
  /**
   * @remarks
   * The object ID.
   * 
   * @example
   * 1234
   */
  objectId?: string;
  /**
   * @remarks
   * The object name.
   * 
   * @example
   * abc
   */
  objectName?: string;
  /**
   * @remarks
   * The object type.
   * 
   * @example
   * MAX_COMPUTE_SQL
   */
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      objectId: 'ObjectId',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectId: 'string',
      objectName: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObject extends $dara.Model {
  /**
   * @remarks
   * The change type. Valid values: CREATE, UPDATE, and DELETE.
   * 
   * @example
   * DELETE
   */
  changeType?: string;
  /**
   * @remarks
   * The node ID.
   * 
   * @example
   * n_1234
   */
  nodeId?: string;
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
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The submit comment.
   * 
   * @example
   * 提交说明
   */
  submitComment?: string;
  /**
   * @remarks
   * The submit object.
   */
  submitObject?: GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObjectSubmitObject;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      nodeId: 'NodeId',
      objectVersion: 'ObjectVersion',
      projectId: 'ProjectId',
      submitComment: 'SubmitComment',
      submitObject: 'SubmitObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      nodeId: 'string',
      objectVersion: 'string',
      projectId: 'number',
      submitComment: 'string',
      submitObject: GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObjectSubmitObject,
    };
  }

  validate() {
    if(this.submitObject && typeof (this.submitObject as any).validate === 'function') {
      (this.submitObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestSubmitDetailResponseBodySubmitDetailResult extends $dara.Model {
  /**
   * @remarks
   * The submit record ID.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The publish status. Valid values: 
   * - NOT_VERIFIED: not verified.
   * - APPROVING: approval in progress.
   * - APPROVE_FAILED: approval failed.
   * - APPROVE_SUCCESS: approval succeeded.
   * - APPROVE_REVOKED: approval revoked.
   * - CHECKING: publish verification in progress.
   * - CHECK_FAILED: publish verification failed.
   * - CHECK_SUCCESS: publish verification succeeded.
   * - PUBLISHING: publishing in progress.
   * - FAILED: publish failed.
   * - SUCCESS: publish succeeded.
   * 
   * @example
   * SUCCESS
   */
  publishStatus?: string;
  /**
   * @remarks
   * The pending submit record object.
   */
  releaseObject?: GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObject;
  /**
   * @remarks
   * The submit status. Valid values: 
   * 
   * - TO_BE_PUBLISHED: pending.
   * 
   * - PUBLISHED: published.
   * 
   * - PUBLISHING: publishing.
   * 
   * @example
   * TO_BE_PUBLISHED
   */
  submitStatus?: string;
  /**
   * @remarks
   * The record tag.
   * 
   * @example
   * tag
   */
  tag?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      publishStatus: 'PublishStatus',
      releaseObject: 'ReleaseObject',
      submitStatus: 'SubmitStatus',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      publishStatus: 'string',
      releaseObject: GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObject,
      submitStatus: 'string',
      tag: 'string',
    };
  }

  validate() {
    if(this.releaseObject && typeof (this.releaseObject as any).validate === 'function') {
      (this.releaseObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLatestSubmitDetailResponseBody extends $dara.Model {
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
   * The pending submit details.
   */
  submitDetailResult?: GetLatestSubmitDetailResponseBodySubmitDetailResult;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      submitDetailResult: 'SubmitDetailResult',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      submitDetailResult: GetLatestSubmitDetailResponseBodySubmitDetailResult,
      success: 'boolean',
    };
  }

  validate() {
    if(this.submitDetailResult && typeof (this.submitDetailResult as any).validate === 'function') {
      (this.submitDetailResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

