// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAnnotationMissionResponseBodyDataAnnotationMissionList extends $dara.Model {
  /**
   * @example
   * 1
   */
  annotationMissionDataSourceType?: number;
  annotationMissionDebugDataSourceList?: number[];
  /**
   * @example
   * ddce607f-f537-4ebd-9914-cf45671defb9
   */
  annotationMissionId?: string;
  annotationMissionName?: string;
  /**
   * @example
   * 1
   */
  annotationStatus?: number;
  /**
   * @example
   * 1684511999000
   */
  conversationTimeEndFilter?: number;
  /**
   * @example
   * 1683216000000
   */
  conversationTimeStartFilter?: number;
  /**
   * @example
   * 1676170339515
   */
  createTime?: number;
  /**
   * @example
   * false
   */
  excludeOtherMissionSession?: boolean;
  /**
   * @example
   * 1683443903785
   */
  finishTime?: number;
  /**
   * @example
   * 32be9d94-1346-4c4a-a4d0-ccd379f87013
   */
  instanceId?: string;
  /**
   * @example
   * 1
   */
  samplingCount?: number;
  samplingDescription?: string;
  /**
   * @example
   * 1
   */
  samplingRate?: number;
  /**
   * @example
   * 1
   */
  samplingType?: number;
  sessionEndReasonFilterList?: number[];
  /**
   * @example
   * 1
   */
  sessionFinishCount?: number;
  /**
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
  annotationMissionList?: ListAnnotationMissionResponseBodyDataAnnotationMissionList[];
  /**
   * @example
   * CDR \\"job-c7b8a817-b8e8-40f3-b7ad-f28dcea218ff\\" doesn\\"t exists.
   */
  message?: string;
  /**
   * @example
   * 1
   */
  pageIndex?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 30
   */
  totalCount?: number;
  /**
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
   * @example
   * OK
   */
  code?: string;
  data?: ListAnnotationMissionResponseBodyData;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * CDR \\"job-c7b8a817-b8e8-40f3-b7ad-f28dcea218ff\\" doesn\\"t exists.
   */
  message?: string;
  /**
   * @example
   * 254EB995-DEDF-48A4-9101-9CA5B72FFBCC
   */
  requestId?: string;
  /**
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

