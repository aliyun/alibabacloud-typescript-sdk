// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRectifyFlowResponseBodyDataIssuesDataOwners extends $dara.Model {
  /**
   * @remarks
   * The display name of the user.
   * 
   * @example
   * test
   */
  displayName?: string;
  /**
   * @remarks
   * The ID of the user.
   * 
   * @example
   * 301
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      displayName: 'DisplayName',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      displayName: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRectifyFlowResponseBodyDataIssuesDataProblem extends $dara.Model {
  /**
   * @remarks
   * The ID of the object.
   * 
   * @example
   * 123
   */
  objectId?: string;
  /**
   * @remarks
   * The ID of the parent object.
   * 
   * @example
   * 123
   */
  parentObjectId?: string;
  /**
   * @remarks
   * The contact email for the governance issue.
   * 
   * @example
   * 123@test.com
   */
  problemContactMail?: string;
  /**
   * @remarks
   * Other contact information for the governance issue.
   * 
   * @example
   * 12345
   */
  problemContactOther?: string;
  /**
   * @remarks
   * The contact phone number for the governance issue.
   * 
   * @example
   * 123
   */
  problemContactPhone?: string;
  /**
   * @remarks
   * The description of the governance issue.
   * 
   * @example
   * test
   */
  problemDesc?: string;
  /**
   * @remarks
   * The submission method of the issue.
   * 
   * @example
   * OPENAPI
   */
  problemSubmitType?: string;
  /**
   * @remarks
   * The user who submitted the issue.
   * 
   * @example
   * 3001
   */
  problemSubmitter?: string;
  /**
   * @remarks
   * The name of the user who submitted the issue.
   * 
   * @example
   * test
   */
  problemSubmitterUserName?: string;
  /**
   * @remarks
   * The type of the governance issue.
   */
  problemTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      objectId: 'ObjectId',
      parentObjectId: 'ParentObjectId',
      problemContactMail: 'ProblemContactMail',
      problemContactOther: 'ProblemContactOther',
      problemContactPhone: 'ProblemContactPhone',
      problemDesc: 'ProblemDesc',
      problemSubmitType: 'ProblemSubmitType',
      problemSubmitter: 'ProblemSubmitter',
      problemSubmitterUserName: 'ProblemSubmitterUserName',
      problemTypes: 'ProblemTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectId: 'string',
      parentObjectId: 'string',
      problemContactMail: 'string',
      problemContactOther: 'string',
      problemContactPhone: 'string',
      problemDesc: 'string',
      problemSubmitType: 'string',
      problemSubmitter: 'string',
      problemSubmitterUserName: 'string',
      problemTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.problemTypes)) {
      $dara.Model.validateArray(this.problemTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRectifyFlowResponseBodyDataIssuesDataRelatedKnowledge extends $dara.Model {
  /**
   * @remarks
   * The cause of the issue.
   * 
   * @example
   * test
   */
  cause?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * test
   */
  desc?: string;
  /**
   * @remarks
   * The ID of the knowledge.
   * 
   * @example
   * 649144693069
   */
  knowledgeId?: number;
  /**
   * @remarks
   * The owner.
   * 
   * @example
   * 3001
   */
  owner?: string;
  /**
   * @remarks
   * The name of the owner.
   * 
   * @example
   * test
   */
  ownerName?: string;
  /**
   * @remarks
   * The Solutions.
   * 
   * @example
   * teset
   */
  solution?: string;
  /**
   * @remarks
   * The title.
   * 
   * @example
   * teset
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      cause: 'Cause',
      desc: 'Desc',
      knowledgeId: 'KnowledgeId',
      owner: 'Owner',
      ownerName: 'OwnerName',
      solution: 'Solution',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cause: 'string',
      desc: 'string',
      knowledgeId: 'number',
      owner: 'string',
      ownerName: 'string',
      solution: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRectifyFlowResponseBodyDataIssuesData extends $dara.Model {
  /**
   * @remarks
   * The submission time.
   * 
   * @example
   * 2026-10-22
   */
  commitTime?: string;
  /**
   * @remarks
   * The ID of the governance object.
   * 
   * @example
   * 768244593451
   */
  governItemId?: number;
  /**
   * @remarks
   * The ID of the governance object.
   * 
   * @example
   * 28783986302
   */
  governObjectId?: number;
  /**
   * @remarks
   * Specifies whether the rectification is in progress.
   * 
   * @example
   * true
   */
  isRectify?: boolean;
  /**
   * @remarks
   * The list of owners.
   */
  owners?: GetRectifyFlowResponseBodyDataIssuesDataOwners[];
  /**
   * @remarks
   * The governance issue object.
   */
  problem?: GetRectifyFlowResponseBodyDataIssuesDataProblem;
  /**
   * @remarks
   * The property map of the governance object.
   */
  properties?: { [key: string]: string };
  /**
   * @remarks
   * The ID of the rectification.
   * 
   * @example
   * 813969529153
   */
  rectifyId?: number;
  /**
   * @remarks
   * The name of the rectification.
   * 
   * @example
   * test
   */
  rectifyName?: string;
  /**
   * @remarks
   * The status of the rectification.
   * 
   * @example
   * SUCCESS
   */
  rectifyStatus?: string;
  /**
   * @remarks
   * The ID of the user who performs the rectification.
   * 
   * @example
   * 3001
   */
  rectifyUser?: string;
  /**
   * @remarks
   * The display name of the user who performs the rectification.
   * 
   * @example
   * test
   */
  rectifyUserName?: string;
  /**
   * @remarks
   * The related knowledge base.
   */
  relatedKnowledge?: GetRectifyFlowResponseBodyDataIssuesDataRelatedKnowledge[];
  /**
   * @remarks
   * The status of the governance object.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * The submission method.
   * 
   * @example
   * OPEN API
   */
  submitType?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 575244494646
   */
  tenantId?: number;
  static names(): { [key: string]: string } {
    return {
      commitTime: 'CommitTime',
      governItemId: 'GovernItemId',
      governObjectId: 'GovernObjectId',
      isRectify: 'IsRectify',
      owners: 'Owners',
      problem: 'Problem',
      properties: 'Properties',
      rectifyId: 'RectifyId',
      rectifyName: 'RectifyName',
      rectifyStatus: 'RectifyStatus',
      rectifyUser: 'RectifyUser',
      rectifyUserName: 'RectifyUserName',
      relatedKnowledge: 'RelatedKnowledge',
      status: 'Status',
      submitType: 'SubmitType',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      commitTime: 'string',
      governItemId: 'number',
      governObjectId: 'number',
      isRectify: 'boolean',
      owners: { 'type': 'array', 'itemType': GetRectifyFlowResponseBodyDataIssuesDataOwners },
      problem: GetRectifyFlowResponseBodyDataIssuesDataProblem,
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      rectifyId: 'number',
      rectifyName: 'string',
      rectifyStatus: 'string',
      rectifyUser: 'string',
      rectifyUserName: 'string',
      relatedKnowledge: { 'type': 'array', 'itemType': GetRectifyFlowResponseBodyDataIssuesDataRelatedKnowledge },
      status: 'string',
      submitType: 'string',
      tenantId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.owners)) {
      $dara.Model.validateArray(this.owners);
    }
    if(this.problem && typeof (this.problem as any).validate === 'function') {
      (this.problem as any).validate();
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(Array.isArray(this.relatedKnowledge)) {
      $dara.Model.validateArray(this.relatedKnowledge);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRectifyFlowResponseBodyDataIssues extends $dara.Model {
  /**
   * @remarks
   * The issues on the current page. The fields are consistent with the issue list.
   */
  data?: GetRectifyFlowResponseBodyDataIssuesData[];
  /**
   * @remarks
   * The total number of issues.
   * 
   * @example
   * 467439222172
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
      data: { 'type': 'array', 'itemType': GetRectifyFlowResponseBodyDataIssuesData },
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

export class GetRectifyFlowResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The completion time as a UNIX timestamp in milliseconds. This parameter is empty if the rectification is not completed.
   * 
   * @example
   * 57753888419
   */
  finishTime?: number;
  /**
   * @remarks
   * The pagination information for rectification issues. If the rectification has been accepted, the acceptance snapshot is used.
   */
  issues?: GetRectifyFlowResponseBodyDataIssues;
  /**
   * @remarks
   * The total number of current issues in the process.
   * 
   * @example
   * 415492404179
   */
  problemCount?: number;
  /**
   * @remarks
   * The process ID.
   * 
   * @example
   * 14561234364
   */
  rectifyId?: number;
  /**
   * @remarks
   * The process name.
   * 
   * @example
   * test
   */
  rectifyName?: string;
  /**
   * @remarks
   * The priority.
   * 
   * @example
   * 1
   */
  rectifyPriority?: string;
  /**
   * @remarks
   * The rectifier ID.
   * 
   * @example
   * 3001
   */
  rectifyUser?: string;
  /**
   * @remarks
   * The rectifier name.
   * 
   * @example
   * test
   */
  rectifyUserName?: string;
  /**
   * @remarks
   * The start time, in UNIX milliseconds.
   * 
   * @example
   * 496002949493
   */
  startTime?: number;
  /**
   * @remarks
   * The process status.
   * 
   * @example
   * SUCCESS
   */
  status?: string;
  /**
   * @remarks
   * The initiator ID.
   * 
   * @example
   * 3001
   */
  submitUser?: string;
  /**
   * @remarks
   * The initiator name.
   * 
   * @example
   * test
   */
  submitUserName?: string;
  /**
   * @remarks
   * The verifier ID.
   * 
   * @example
   * 3001
   */
  verifyUser?: string;
  /**
   * @remarks
   * The verifier name.
   * 
   * @example
   * test
   */
  verifyUserName?: string;
  static names(): { [key: string]: string } {
    return {
      finishTime: 'FinishTime',
      issues: 'Issues',
      problemCount: 'ProblemCount',
      rectifyId: 'RectifyId',
      rectifyName: 'RectifyName',
      rectifyPriority: 'RectifyPriority',
      rectifyUser: 'RectifyUser',
      rectifyUserName: 'RectifyUserName',
      startTime: 'StartTime',
      status: 'Status',
      submitUser: 'SubmitUser',
      submitUserName: 'SubmitUserName',
      verifyUser: 'VerifyUser',
      verifyUserName: 'VerifyUserName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishTime: 'number',
      issues: GetRectifyFlowResponseBodyDataIssues,
      problemCount: 'number',
      rectifyId: 'number',
      rectifyName: 'string',
      rectifyPriority: 'string',
      rectifyUser: 'string',
      rectifyUserName: 'string',
      startTime: 'number',
      status: 'string',
      submitUser: 'string',
      submitUserName: 'string',
      verifyUser: 'string',
      verifyUserName: 'string',
    };
  }

  validate() {
    if(this.issues && typeof (this.issues as any).validate === 'function') {
      (this.issues as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRectifyFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The rectification details.
   */
  data?: GetRectifyFlowResponseBodyData;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The backend exception details.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
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
      data: GetRectifyFlowResponseBodyData,
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

