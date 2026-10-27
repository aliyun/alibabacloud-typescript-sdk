// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnnotationMissionResponseBodyDataAnnotationMissionList extends $dara.Model {
  /**
   * @remarks
   * The data source of the annotation task. Valid values: 1: Outbound call. 2: Navigation.
   * 
   * @example
   * 1
   */
  annotationMissionDataSourceType?: number;
  /**
   * @remarks
   * The list of debug data sources for the annotation task.
   * 
   * > Note: An additional 0 is included in the response. The return values are [0,1], [0,2], or [0,1,2].
   */
  annotationMissionDebugDataSourceList?: number[];
  /**
   * @remarks
   * The task ID.
   * 
   * @example
   * ddce607f-f537-4ebd-9914-cf45671defb9
   */
  annotationMissionId?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Experience scenario - Move vehicle - Annotation task - 20230220-141347
   */
  annotationMissionName?: string;
  /**
   * @remarks
   * The annotation status. Valid values:
   * - 1: In progress.
   * - 2: Completed.
   * - 3: Closed.
   * 
   * @example
   * 1
   */
  annotationStatus?: number;
  /**
   * @remarks
   * The end time of the conversation time query condition for the annotation task.
   * 
   * @example
   * 1684511999000
   */
  conversationTimeEndFilter?: number;
  /**
   * @remarks
   * The start time of the conversation time query condition for the annotation task.
   * 
   * @example
   * 1683216000000
   */
  conversationTimeStartFilter?: number;
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1676170339515
   */
  createTime?: number;
  /**
   * @remarks
   * Indicates whether to exclude call records that have been annotated in other tasks.
   * 
   * @example
   * false
   */
  excludeOtherMissionSession?: boolean;
  /**
   * @remarks
   * The completion time of the annotation task. The value is a UNIX timestamp in milliseconds.
   * 
   * @example
   * 1683443903785
   */
  finishTime?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * 32be9d94-1346-4c4a-a4d0-ccd379f87013
   */
  instanceId?: string;
  /**
   * @remarks
   * The maximum limit for the sampling count.
   * 
   * @example
   * 1
   */
  samplingCount?: number;
  /**
   * @remarks
   * The sampling description.
   * 
   * @example
   * Annotation
   */
  samplingDescription?: string;
  /**
   * @remarks
   * The sampling rate.
   * 
   * @example
   * 1
   */
  samplingRate?: number;
  /**
   * @remarks
   * The sampling type.
   * 
   * @example
   * 1
   */
  samplingType?: number;
  /**
   * @remarks
   * The list of call end reasons used to create the task. Valid values:
   * - 1: Normal completion.
   * - 2: Hang up by the robot after unrecognized input.
   * - 3: Hang up due to silence timeout.
   * - 4: Hang up by the user after unrecognized input.
   * - 5: Hang up by the user without a reason.
   * - 6: Transfer to a human agent due to intent match.
   * - 7: Transfer to a human agent after unrecognized input.
   * - 8: No interaction on the user side.
   * - 9: Interruption due to a system exception.
   * - 10: Transfer to IVR due to intent match.
   * - 11: Transfer to IVR after unrecognized input.
   */
  sessionEndReasonFilterList?: number[];
  /**
   * @remarks
   * The number of completed sessions in the annotation task.
   * 
   * @example
   * 1
   */
  sessionFinishCount?: number;
  /**
   * @remarks
   * The total number of sessions in the annotation task.
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
   * The list of annotation tasks.
   */
  annotationMissionList?: ListAnnotationMissionResponseBodyDataAnnotationMissionList[];
  /**
   * @remarks
   * The additional information. If the request is successful, success is returned. If the request fails, a specific error code is returned.
   * 
   * @example
   * CDR \\"job-c7b8a817-b8e8-40f3-b7ad-f28dcea218ff\\" doesn\\"t exists.
   */
  message?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageIndex?: number;
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
   * Indicates whether the call was successful. Valid values: true: The call was successful. false: The call failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total count.
   * 
   * @example
   * 30
   */
  totalCount?: number;
  /**
   * @remarks
   * The total number of pages.
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
   * The response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The data.
   */
  data?: ListAnnotationMissionResponseBodyData;
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
   * The additional information. If the request is successful, success is returned. If the request fails, a specific error code is returned.
   * 
   * @example
   * CDR \\"job-c7b8a817-b8e8-40f3-b7ad-f28dcea218ff\\" doesn\\"t exists.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the call was successful. Valid values: true: The call was successful. false: The call failed.
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

