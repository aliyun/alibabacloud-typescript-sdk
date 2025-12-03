// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportInsightWorkitemStatusResponseBodyResult extends $dara.Model {
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
  /**
   * @example
   * 1713430241000
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
  /**
   * @example
   * 61db9af2148974246bexxxx
   */
  organizationId?: string;
  /**
   * @example
   * c3640ab6233fcc10a7e3aaxxxx
   */
  parentId?: string;
  /**
   * @example
   * 6135b21fb383ef39551cxxxx,63466a385dc8531eebd7xxxx
   */
  participantIds?: string;
  /**
   * @example
   * 10
   */
  phase?: number;
  /**
   * @example
   * 0
   */
  priority?: number;
  productId?: string;
  /**
   * @example
   * 505ac6433dfbda8df0b08bxxxx
   */
  projectId?: string;
  serialNumber?: number;
  /**
   * @example
   * projex
   */
  source?: string;
  /**
   * @example
   * 505ac6433dfbda8df0b08bxxxx
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
  versionId?: string;
  /**
   * @example
   * [6a8cdda167415bea1506c7262c]
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
      gmtClosed: 'gmtClosed',
      gmtCreate: 'gmtCreate',
      gmtDue: 'gmtDue',
      gmtModified: 'gmtModified',
      gmtStart: 'gmtStart',
      gmtTodo: 'gmtTodo',
      id: 'id',
      isArchived: 'isArchived',
      isDeleted: 'isDeleted',
      isDone: 'isDone',
      organizationId: 'organizationId',
      parentId: 'parentId',
      participantIds: 'participantIds',
      phase: 'phase',
      priority: 'priority',
      productId: 'productId',
      projectId: 'projectId',
      serialNumber: 'serialNumber',
      source: 'source',
      sprintId: 'sprintId',
      stage: 'stage',
      status: 'status',
      statusId: 'statusId',
      storyPoint: 'storyPoint',
      subType: 'subType',
      subject: 'subject',
      type: 'type',
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
      gmtClosed: 'number',
      gmtCreate: 'number',
      gmtDue: 'number',
      gmtModified: 'number',
      gmtStart: 'number',
      gmtTodo: 'number',
      id: 'number',
      isArchived: 'string',
      isDeleted: 'string',
      isDone: 'string',
      organizationId: 'string',
      parentId: 'string',
      participantIds: 'string',
      phase: 'number',
      priority: 'number',
      productId: 'string',
      projectId: 'string',
      serialNumber: 'number',
      source: 'string',
      sprintId: 'string',
      stage: 'number',
      status: 'string',
      statusId: 'string',
      storyPoint: 'number',
      subType: 'string',
      subject: 'string',
      type: 'number',
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

export class ExportInsightWorkitemStatusResponseBody extends $dara.Model {
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
  result?: ExportInsightWorkitemStatusResponseBodyResult[];
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
      result: { 'type': 'array', 'itemType': ExportInsightWorkitemStatusResponseBodyResult },
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

