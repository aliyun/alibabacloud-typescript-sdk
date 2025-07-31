// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObjectSubmitObject extends $dara.Model {
  /**
   * @example
   * 1234
   */
  objectId?: string;
  /**
   * @example
   * abc
   */
  objectName?: string;
  /**
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
   * @example
   * DELETE
   */
  changeType?: string;
  /**
   * @example
   * n_1234
   */
  nodeId?: string;
  /**
   * @example
   * 1
   */
  objectVersion?: string;
  /**
   * @example
   * 1234
   */
  projectId?: number;
  /**
   * @example
   * 提交说明
   */
  submitComment?: string;
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
   * @example
   * 1234
   */
  id?: number;
  /**
   * @example
   * SUCCESS
   */
  publishStatus?: string;
  releaseObject?: GetLatestSubmitDetailResponseBodySubmitDetailResultReleaseObject;
  /**
   * @example
   * TO_BE_PUBLISHED
   */
  submitStatus?: string;
  /**
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
   * @example
   * OK
   */
  code?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
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
  submitDetailResult?: GetLatestSubmitDetailResponseBodySubmitDetailResult;
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

