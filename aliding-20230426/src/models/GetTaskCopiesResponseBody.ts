// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTaskCopiesResponseBodyDataCurrentActivityInstances extends $dara.Model {
  /**
   * @example
   * act-xxaanfaf
   */
  activityId?: string;
  /**
   * @example
   * running
   */
  activityInstanceStatus?: string;
  /**
   * @example
   * act-12345
   */
  activityName?: string;
  /**
   * @example
   * redirect task
   */
  activityNameInEnglish?: string;
  /**
   * @example
   * 12345
   */
  id?: number;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityInstanceStatus: 'ActivityInstanceStatus',
      activityName: 'ActivityName',
      activityNameInEnglish: 'ActivityNameInEnglish',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      activityInstanceStatus: 'string',
      activityName: 'string',
      activityNameInEnglish: 'string',
      id: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskCopiesResponseBodyData extends $dara.Model {
  /**
   * @example
   * [ "actxxx" ]
   */
  actionExecutorId?: string[];
  /**
   * @example
   * [ "name" ]
   */
  actionExecutorName?: string[];
  /**
   * @example
   * APP_XCxxx
   */
  appType?: string;
  /**
   * @example
   * g02fbs08xxx
   */
  carbonActivityId?: string;
  /**
   * @example
   * 2020-01-01
   */
  createTimeGMT?: string;
  /**
   * @example
   * []
   */
  currentActivityInstances?: GetTaskCopiesResponseBodyDataCurrentActivityInstances[];
  /**
   * @example
   * {}
   */
  dataMap?: { [key: string]: any };
  /**
   * @example
   * edit
   */
  dataType?: string;
  /**
   * @example
   * 2020-01-01
   */
  finishTimeGMT?: string;
  /**
   * @example
   * formxxxx
   */
  formInstanceId?: string;
  /**
   * @example
   * uuid
   */
  formUuid?: string;
  /**
   * @example
   * value
   */
  instanceValue?: string;
  /**
   * @example
   * 2020-01-01
   */
  modifiedTimeGMT?: string;
  /**
   * @example
   * guyagsd
   */
  originatorAvatar?: string;
  /**
   * @example
   * guyagsd
   */
  originatorDisplayName?: string;
  /**
   * @example
   * 123456
   */
  originatorId?: string;
  /**
   * @example
   * 同意
   */
  processApprovedResult?: string;
  /**
   * @example
   * 同意
   */
  processApprovedResultText?: string;
  /**
   * @example
   * code
   */
  processCode?: string;
  /**
   * @example
   * processxxxx
   */
  processId?: number;
  /**
   * @example
   * instancexxxx
   */
  processInstanceId?: string;
  /**
   * @example
   * 同意
   */
  processInstanceStatus?: string;
  /**
   * @example
   * 同意
   */
  processInstanceStatusText?: string;
  /**
   * @example
   * 名称
   */
  processName?: string;
  /**
   * @example
   * 12345
   */
  serialNumber?: string;
  /**
   * @example
   * 标题
   */
  title?: string;
  /**
   * @example
   * 1.0
   */
  version?: number;
  static names(): { [key: string]: string } {
    return {
      actionExecutorId: 'ActionExecutorId',
      actionExecutorName: 'ActionExecutorName',
      appType: 'AppType',
      carbonActivityId: 'CarbonActivityId',
      createTimeGMT: 'CreateTimeGMT',
      currentActivityInstances: 'CurrentActivityInstances',
      dataMap: 'DataMap',
      dataType: 'DataType',
      finishTimeGMT: 'FinishTimeGMT',
      formInstanceId: 'FormInstanceId',
      formUuid: 'FormUuid',
      instanceValue: 'InstanceValue',
      modifiedTimeGMT: 'ModifiedTimeGMT',
      originatorAvatar: 'OriginatorAvatar',
      originatorDisplayName: 'OriginatorDisplayName',
      originatorId: 'OriginatorId',
      processApprovedResult: 'ProcessApprovedResult',
      processApprovedResultText: 'ProcessApprovedResultText',
      processCode: 'ProcessCode',
      processId: 'ProcessId',
      processInstanceId: 'ProcessInstanceId',
      processInstanceStatus: 'ProcessInstanceStatus',
      processInstanceStatusText: 'ProcessInstanceStatusText',
      processName: 'ProcessName',
      serialNumber: 'SerialNumber',
      title: 'Title',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionExecutorId: { 'type': 'array', 'itemType': 'string' },
      actionExecutorName: { 'type': 'array', 'itemType': 'string' },
      appType: 'string',
      carbonActivityId: 'string',
      createTimeGMT: 'string',
      currentActivityInstances: { 'type': 'array', 'itemType': GetTaskCopiesResponseBodyDataCurrentActivityInstances },
      dataMap: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      dataType: 'string',
      finishTimeGMT: 'string',
      formInstanceId: 'string',
      formUuid: 'string',
      instanceValue: 'string',
      modifiedTimeGMT: 'string',
      originatorAvatar: 'string',
      originatorDisplayName: 'string',
      originatorId: 'string',
      processApprovedResult: 'string',
      processApprovedResultText: 'string',
      processCode: 'string',
      processId: 'number',
      processInstanceId: 'string',
      processInstanceStatus: 'string',
      processInstanceStatusText: 'string',
      processName: 'string',
      serialNumber: 'string',
      title: 'string',
      version: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.actionExecutorId)) {
      $dara.Model.validateArray(this.actionExecutorId);
    }
    if(Array.isArray(this.actionExecutorName)) {
      $dara.Model.validateArray(this.actionExecutorName);
    }
    if(Array.isArray(this.currentActivityInstances)) {
      $dara.Model.validateArray(this.currentActivityInstances);
    }
    if(this.dataMap) {
      $dara.Model.validateMap(this.dataMap);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetTaskCopiesResponseBody extends $dara.Model {
  /**
   * @example
   * [{}]
   */
  data?: GetTaskCopiesResponseBodyData[];
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  /**
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  vendorRequestId?: string;
  /**
   * @example
   * dingtalk
   */
  vendorType?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      pageNumber: 'pageNumber',
      requestId: 'requestId',
      totalCount: 'totalCount',
      vendorRequestId: 'vendorRequestId',
      vendorType: 'vendorType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': GetTaskCopiesResponseBodyData },
      pageNumber: 'number',
      requestId: 'string',
      totalCount: 'number',
      vendorRequestId: 'string',
      vendorType: 'string',
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

