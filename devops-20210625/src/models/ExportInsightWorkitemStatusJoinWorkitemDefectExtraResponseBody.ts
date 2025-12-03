// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportInsightWorkitemStatusJoinWorkitemDefectExtraResponseBodyResult extends $dara.Model {
  /**
   * @example
   * 65e836b981d758be7a25xxxx
   */
  assignedToId?: string;
  /**
   * @example
   * 65e836b981d758be7a25xxxx
   */
  creatorId?: string;
  /**
   * @example
   * 10
   */
  expectedWorkTime?: number;
  /**
   * @example
   * 123
   */
  extraId?: number;
  /**
   * @example
   * N
   */
  extraIsDeleted?: string;
  /**
   * @example
   * 10
   */
  foundPhase?: number;
  /**
   * @example
   * 33166339200000
   */
  gmtClosed?: number;
  /**
   * @example
   * 1713430241000
   */
  gmtCreate?: number;
  /**
   * @example
   * 33166339200000
   */
  gmtDue?: number;
  gmtFixed?: string;
  /**
   * @example
   * 1714755985000
   */
  gmtModified?: number;
  /**
   * @example
   * 33166339200000
   */
  gmtStart?: number;
  /**
   * @example
   * 33166339200000
   */
  gmtTodo?: number;
  /**
   * @example
   * 701615370
   */
  id?: number;
  /**
   * @example
   * N
   */
  isArchived?: string;
  /**
   * @example
   * N
   */
  isDeleted?: string;
  /**
   * @example
   * Y
   */
  isDone?: string;
  isStupid?: string;
  /**
   * @example
   * 61db9af2148974246bexxxx
   */
  organizationId?: string;
  /**
   * @example
   * a80a203a9078a7a1b1f2c6xxxx
   */
  parentId?: string;
  /**
   * @example
   * 6135b21fb383ef39551cf02e,63466a385dc8531eebd764e9
   */
  participantIds?: string;
  /**
   * @example
   * 10
   */
  phase?: number;
  /**
   * @example
   * 2
   */
  priority?: number;
  productId?: string;
  /**
   * @example
   * 6732a29d846bf998dc09e7xxxx
   */
  projectId?: string;
  reopenNum?: number;
  serialNumber?: number;
  seriousLevel?: number;
  solution?: string;
  /**
   * @example
   * projex
   */
  source?: string;
  /**
   * @example
   * 731c83a40bbf3c2f080e07xxxx
   */
  sprintId?: string;
  /**
   * @example
   * 10
   */
  stage?: number;
  status?: string;
  /**
   * @example
   * 100005
   */
  statusId?: string;
  /**
   * @example
   * 10.0
   */
  storyPoint?: number;
  /**
   * @example
   * 9uy29901re573f561d69xxxx
   */
  subType?: string;
  subject?: string;
  /**
   * @example
   * 1
   */
  type?: number;
  /**
   * @example
   * 65e836b981d758be7a25xxxx
   */
  verifierId?: string;
  versionId?: string;
  /**
   * @example
   * {6a8cdda167415bea1506c7262c}
   */
  versions?: string;
  /**
   * @example
   * 10
   */
  workTime?: number;
  /**
   * @example
   * 636f661a612a945bbcdb4cxxxx
   */
  workitemId?: string;
  static names(): { [key: string]: string } {
    return {
      assignedToId: 'assignedToId',
      creatorId: 'creatorId',
      expectedWorkTime: 'expectedWorkTime',
      extraId: 'extraId',
      extraIsDeleted: 'extraIsDeleted',
      foundPhase: 'foundPhase',
      gmtClosed: 'gmtClosed',
      gmtCreate: 'gmtCreate',
      gmtDue: 'gmtDue',
      gmtFixed: 'gmtFixed',
      gmtModified: 'gmtModified',
      gmtStart: 'gmtStart',
      gmtTodo: 'gmtTodo',
      id: 'id',
      isArchived: 'isArchived',
      isDeleted: 'isDeleted',
      isDone: 'isDone',
      isStupid: 'isStupid',
      organizationId: 'organizationId',
      parentId: 'parentId',
      participantIds: 'participantIds',
      phase: 'phase',
      priority: 'priority',
      productId: 'productId',
      projectId: 'projectId',
      reopenNum: 'reopenNum',
      serialNumber: 'serialNumber',
      seriousLevel: 'seriousLevel',
      solution: 'solution',
      source: 'source',
      sprintId: 'sprintId',
      stage: 'stage',
      status: 'status',
      statusId: 'statusId',
      storyPoint: 'storyPoint',
      subType: 'subType',
      subject: 'subject',
      type: 'type',
      verifierId: 'verifierId',
      versionId: 'versionId',
      versions: 'versions',
      workTime: 'workTime',
      workitemId: 'workitemId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assignedToId: 'string',
      creatorId: 'string',
      expectedWorkTime: 'number',
      extraId: 'number',
      extraIsDeleted: 'string',
      foundPhase: 'number',
      gmtClosed: 'number',
      gmtCreate: 'number',
      gmtDue: 'number',
      gmtFixed: 'string',
      gmtModified: 'number',
      gmtStart: 'number',
      gmtTodo: 'number',
      id: 'number',
      isArchived: 'string',
      isDeleted: 'string',
      isDone: 'string',
      isStupid: 'string',
      organizationId: 'string',
      parentId: 'string',
      participantIds: 'string',
      phase: 'number',
      priority: 'number',
      productId: 'string',
      projectId: 'string',
      reopenNum: 'number',
      serialNumber: 'number',
      seriousLevel: 'number',
      solution: 'string',
      source: 'string',
      sprintId: 'string',
      stage: 'number',
      status: 'string',
      statusId: 'string',
      storyPoint: 'number',
      subType: 'string',
      subject: 'string',
      type: 'number',
      verifierId: 'string',
      versionId: 'string',
      versions: 'string',
      workTime: 'number',
      workitemId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ExportInsightWorkitemStatusJoinWorkitemDefectExtraResponseBody extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * 2
   */
  nextToken?: string;
  result?: ExportInsightWorkitemStatusJoinWorkitemDefectExtraResponseBodyResult[];
  /**
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      result: 'result',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      result: { 'type': 'array', 'itemType': ExportInsightWorkitemStatusJoinWorkitemDefectExtraResponseBodyResult },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

