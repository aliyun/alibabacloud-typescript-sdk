// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCodeReviewResponseBodyCodeReview extends $dara.Model {
  /**
   * @remarks
   * The node command of the root object.
   * 
   * @example
   * WORKFLOW
   */
  command?: string;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1793145600000
   */
  createTime?: number;
  /**
   * @remarks
   * The account ID of the actual submitter.
   * 
   * @example
   * 209000000000000002
   */
  creator?: string;
  /**
   * @remarks
   * The review description provided at creation.
   * 
   * @example
   * Code review
   */
  description?: string;
  /**
   * @remarks
   * The account ID of the final approver. This field is empty if no approval decision has been made.
   * 
   * @example
   * 209000000000000001
   */
  finalReviewer?: string;
  /**
   * @remarks
   * The unique identifier of the review.
   * 
   * @example
   * review-id
   */
  id?: string;
  /**
   * @remarks
   * The update time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1793145600000
   */
  modifyTime?: number;
  /**
   * @remarks
   * The ID of the root review object.
   * 
   * @example
   * 8600000000000000001
   */
  objectId?: string;
  /**
   * @remarks
   * The name of the root review object.
   * 
   * @example
   * sales_workflow
   */
  objectName?: string;
  /**
   * @remarks
   * The object type of the root object.
   * 
   * @example
   * WorkflowDefinition
   */
  objectType?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * 23620
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The approval time. This field is empty if no approval decision has been made.
   * 
   * @example
   * 1793145660000
   */
  reviewTime?: number;
  /**
   * @remarks
   * The account IDs of the designated reviewers.
   */
  reviewers?: string[];
  /**
   * @remarks
   * The review status.
   * 
   * @example
   * Reviewing
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      command: 'Command',
      createTime: 'CreateTime',
      creator: 'Creator',
      description: 'Description',
      finalReviewer: 'FinalReviewer',
      id: 'Id',
      modifyTime: 'ModifyTime',
      objectId: 'ObjectId',
      objectName: 'ObjectName',
      objectType: 'ObjectType',
      projectId: 'ProjectId',
      regionId: 'RegionId',
      reviewTime: 'ReviewTime',
      reviewers: 'Reviewers',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      command: 'string',
      createTime: 'number',
      creator: 'string',
      description: 'string',
      finalReviewer: 'string',
      id: 'string',
      modifyTime: 'number',
      objectId: 'string',
      objectName: 'string',
      objectType: 'string',
      projectId: 'number',
      regionId: 'string',
      reviewTime: 'number',
      reviewers: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.reviewers)) {
      $dara.Model.validateArray(this.reviewers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetCodeReviewResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code review metadata.
   */
  codeReview?: GetCodeReviewResponseBodyCodeReview;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * request-id
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codeReview: 'CodeReview',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeReview: GetCodeReviewResponseBodyCodeReview,
      requestId: 'string',
    };
  }

  validate() {
    if(this.codeReview && typeof (this.codeReview as any).validate === 'function') {
      (this.codeReview as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

