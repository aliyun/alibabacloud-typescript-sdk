// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnnotationMissionResponseBodyDataAnnotationMissionList extends $dara.Model {
  /**
   * @remarks
   * Annotation data source type. 1: Outbound call. 2: Navigation.
   * 
   * @example
   * 1
   */
  annotationMissionDataSourceType?: number;
  /**
   * @remarks
   * Annotation debug data source list
   * 
   * > The response includes an extra 0. Valid responses are [0,1], [0,2], or [0,1,2].
   */
  annotationMissionDebugDataSourceList?: number[];
  /**
   * @remarks
   * Mission ID
   * 
   * @example
   * ddce607f-f537-4ebd-9914-cf45671defb9
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * Mission name
   * 
   * @example
   * 体验场景--移车-标注任务-20230220-141347
   */
  annotationMissionName?: string;
  /**
   * @remarks
   * Annotation status
   * 
   * - 1: In progress
   * 
   * - 2: Completed
   * 
   * - 3: Closed
   * 
   * @example
   * 1
   */
  annotationStatus?: number;
  /**
   * @remarks
   * End time of the conversation time query condition for the annotation mission
   * 
   * @example
   * 1684511999000
   */
  conversationTimeEndFilter?: number;
  /**
   * @remarks
   * Start time of the conversation time query condition for the annotation mission
   * 
   * @example
   * 1683216000000
   */
  conversationTimeStartFilter?: number;
  /**
   * @remarks
   * Creation time
   * 
   * @example
   * 1676170339515
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether to exclude call records already annotated in other missions
   * 
   * @example
   * false
   */
  excludeOtherMissionSession?: boolean;
  /**
   * @remarks
   * Completion time of the annotation mission
   * 
   * @example
   * 1683443903785
   */
  finishTime?: number;
  /**
   * @remarks
   * Instance ID
   * 
   * @example
   * 32be9d94-1346-4c4a-a4d0-ccd379f87013
   */
  instanceId?: string;
  /**
   * @remarks
   * Maximum sampling count limit
   * 
   * @example
   * 1
   */
  samplingCount?: number;
  /**
   * @remarks
   * Sampling description
   * 
   * @example
   * 标注
   */
  samplingDescription?: string;
  /**
   * @remarks
   * Sampling rate
   * 
   * @example
   * 1
   */
  samplingRate?: number;
  /**
   * @remarks
   * Sampling type
   * 
   * @example
   * 1
   */
  samplingType?: number;
  /**
   * @remarks
   * List of session end reason types used when creating the mission
   * 
   * - 1: Normal completion
   * 
   * - 2: Bot hangup after rejection
   * 
   * - 3: Hangup due to silence timeout
   * 
   * - 4: User hangup after rejection
   * 
   * - 5: User hangup without reason
   * 
   * - 6: Transfer to agent after intent match
   * 
   * - 7: Transfer to agent after rejection
   * 
   * - 8: No interaction from user side
   * 
   * - 9: System exception interruption
   * 
   * - 10: Transfer to IVR after intent match
   * 
   * - 11: Transfer to IVR after rejection
   */
  sessionEndReasonFilterList?: number[];
  /**
   * @remarks
   * Number of completed sessions in the annotation mission
   * 
   * @example
   * 1
   */
  sessionFinishCount?: number;
  /**
   * @remarks
   * Total number of sessions in the annotation mission
   * 
   * @example
   * 1
   */
  sessionTotalCount?: number;
  static names(): { [key: string]: string } {
    return {
      annotationMissionDataSourceType: 'AnnotationMissionDataSourceType',
      annotationMissionDebugDataSourceList: 'AnnotationMissionDebugDataSourceList',
      annotationMissionId: 'AnnotationMissionId',
      annotationMissionName: 'AnnotationMissionName',
      annotationStatus: 'AnnotationStatus',
      conversationTimeEndFilter: 'ConversationTimeEndFilter',
      conversationTimeStartFilter: 'ConversationTimeStartFilter',
      createTime: 'CreateTime',
      excludeOtherMissionSession: 'ExcludeOtherMissionSession',
      finishTime: 'FinishTime',
      instanceId: 'InstanceId',
      samplingCount: 'SamplingCount',
      samplingDescription: 'SamplingDescription',
      samplingRate: 'SamplingRate',
      samplingType: 'SamplingType',
      sessionEndReasonFilterList: 'SessionEndReasonFilterList',
      sessionFinishCount: 'SessionFinishCount',
      sessionTotalCount: 'SessionTotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionDataSourceType: 'number',
      annotationMissionDebugDataSourceList: { 'type': 'array', 'itemType': 'number' },
      annotationMissionId: 'string',
      annotationMissionName: 'string',
      annotationStatus: 'number',
      conversationTimeEndFilter: 'number',
      conversationTimeStartFilter: 'number',
      createTime: 'number',
      excludeOtherMissionSession: 'boolean',
      finishTime: 'number',
      instanceId: 'string',
      samplingCount: 'number',
      samplingDescription: 'string',
      samplingRate: 'number',
      samplingType: 'number',
      sessionEndReasonFilterList: { 'type': 'array', 'itemType': 'number' },
      sessionFinishCount: 'number',
      sessionTotalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.annotationMissionDebugDataSourceList)) {
      $dara.Model.validateArray(this.annotationMissionDebugDataSourceList);
    }
    if(Array.isArray(this.sessionEndReasonFilterList)) {
      $dara.Model.validateArray(this.sessionEndReasonFilterList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationMissionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Annotation mission list
   */
  annotationMissionList?: ListAnnotationMissionResponseBodyDataAnnotationMissionList[];
  /**
   * @remarks
   * Additional information. Returns success for normal requests. Returns a specific error code for abnormal requests.
   * 
   * @example
   * CDR \\"job-c7b8a817-b8e8-40f3-b7ad-f28dcea218ff\\" doesn\\"t exists.
   */
  message?: string;
  /**
   * @remarks
   * Page number
   * 
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @remarks
   * Number of entries per page
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * Indicates whether the call succeeded. true: succeeded. false: failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * Total count
   * 
   * @example
   * 30
   */
  totalCount?: number;
  /**
   * @remarks
   * Total number of pages
   * 
   * @example
   * 4
   */
  totalPageCount?: number;
  static names(): { [key: string]: string } {
    return {
      annotationMissionList: 'AnnotationMissionList',
      message: 'Message',
      pageIndex: 'PageIndex',
      pageSize: 'PageSize',
      success: 'Success',
      totalCount: 'TotalCount',
      totalPageCount: 'TotalPageCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotationMissionList: { 'type': 'array', 'itemType': ListAnnotationMissionResponseBodyDataAnnotationMissionList },
      message: 'string',
      pageIndex: 'number',
      pageSize: 'number',
      success: 'boolean',
      totalCount: 'number',
      totalPageCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.annotationMissionList)) {
      $dara.Model.validateArray(this.annotationMissionList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAnnotationMissionResponseBody extends $dara.Model {
  /**
   * @remarks
   * Response code
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * Data
   */
  data?: ListAnnotationMissionResponseBodyData;
  /**
   * @remarks
   * HTTP status code
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * Additional information. Returns success for normal requests. Returns a specific error code for abnormal requests.
   * 
   * @example
   * CDR \\"job-c7b8a817-b8e8-40f3-b7ad-f28dcea218ff\\" doesn\\"t exists.
   */
  message?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call succeeded. true: succeeded. false: failed.
   * 
   * @example
   * true
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
      data: ListAnnotationMissionResponseBodyData,
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

