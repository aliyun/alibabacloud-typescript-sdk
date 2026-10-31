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
   * The name of the object.
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
   * The ID of the node.
   * 
   * @example
   * n_1234
   */
  nodeId?: string;
  /**
   * @remarks
   * The version of the object.
   * 
   * @example
   * 1
   */
  objectVersion?: string;
  /**
   * @remarks
   * The ID of the project.
   * 
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @remarks
   * The commit description.
   * 
   * @example
   * Commit description
   */
  submitComment?: string;
  /**
   * @remarks
   * The object to be published.
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
   * The ID of the commit record.
   * 
   * @example
   * 1234
   */
  id?: number;
  /**
   * @remarks
   * The status of the publish record. Valid values: 
   * - NOT_VERIFIED: Not verified.
   * - APPROVING: Approving.
   * - APPROVE_FAILED: Approval failed.
   * - APPROVE_SUCCESS: Approval succeeded.
   * - APPROVE_REVOKED: Approval revoked.
   * - CHECKING: Checking.
   * - CHECK_FAILED: Check failed.
   * - CHECK_SUCCESS: Check succeeded.
   * - PUBLISHING: Publishing.
   * - FAILED: Failed.
   * - SUCCESS: Succeeded.
   * 
   * @example
   * SUCCESS
   */
  publishStatus?: string;
  /**
   * @remarks
   * The object of the pending release record.
   */
  releaseObject?: GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObject;
  /**
   * @remarks
   * The status of the pending release record. Valid values:
   * - TO_BE_PUBLISHED: Pending release.
   * - PUBLISHED: Published.
   * - PUBLISHING: Publishing.
   * 
   * @example
   * TO_BE_PUBLISHED
   */
  submitStatus?: string;
  /**
   * @remarks
   * The tag of the record.
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
   * The error code. A value of OK indicates that the request is successful.
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
   * The details of the pending release.
   */
  submitDetailResult?: GetLatestSubmitDetailResponseBodySubmitDetailResult;
  /**
   * @remarks
   * Indicates whether the request is successful.
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

