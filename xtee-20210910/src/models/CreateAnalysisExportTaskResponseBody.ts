// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnalysisExportTaskResponseBodyResultObject extends $dara.Model {
  /**
   * @remarks
   * Export list.
   * 
   * @example
   * [
   *                 {
   *                     "fieldName": "requestId",
   *                     "fieldTitle": "RequestId"
   *                 },
   *                 {
   *                     "fieldName": "eventTime",
   *                     "fieldTitle": "事件时间"
   *                 },
   *                 {
   *                     "fieldName": "accountId",
   *                     "fieldTitle": "账号"
   *                 },
   *                 {
   *                     "fieldName": "deviceId",
   *                     "fieldTitle": "设备ID"
   *                 },
   *                 {
   *                     "fieldName": "eventCode",
   *                     "fieldTitle": "事件编码"
   *                 },
   *                 {
   *                     "fieldName": "ip",
   *                     "fieldTitle": "IP"
   *                 },
   *                 {
   *                     "fieldName": "score",
   *                     "fieldTitle": "分值"
   *                 },
   *                 {
   *                     "fieldName": "tags",
   *                     "fieldTitle": "标签"
   *                 },
   *                 {
   *                     "fieldName": "DEtest222",
   *                     "fieldTitle": "测试222"
   *                 }
   *             ]
   */
  columns?: string;
  /**
   * @remarks
   * Export task conditions.
   * 
   * @example
   * {
   *      "fieldName": null, 
   *       "fieldValue": null 
   *       }
   */
  conditions?: string;
  /**
   * @remarks
   * Event start time.
   * 
   * @example
   * 1752076800000
   */
  eventBeginTime?: number;
  /**
   * @remarks
   * Event code.
   * 
   * @example
   * de_ahespg8137
   */
  eventCodes?: string;
  /**
   * @remarks
   * End time.
   * 
   * @example
   * 1753891199000
   */
  eventEndTime?: number;
  /**
   * @remarks
   * File format.
   * 
   * @example
   * CSV
   */
  fileFormat?: string;
  /**
   * @remarks
   * OSS-generated key.
   * 
   * @example
   * xxxxx
   */
  ossKey?: string;
  /**
   * @remarks
   * Export task scope.
   * 
   * @example
   * ALL
   */
  scope?: string;
  /**
   * @remarks
   * Task status.
   * 
   * @example
   * RUNNING
   */
  status?: string;
  /**
   * @remarks
   * Export task type.
   * 
   * @example
   * BASIC
   */
  type?: string;
  /**
   * @remarks
   * User UID
   * 
   * @example
   * 1519714049632764
   */
  userId?: number;
  static names(): { [key: string]: string } {
    return {
      columns: 'columns',
      conditions: 'conditions',
      eventBeginTime: 'eventBeginTime',
      eventCodes: 'eventCodes',
      eventEndTime: 'eventEndTime',
      fileFormat: 'fileFormat',
      ossKey: 'ossKey',
      scope: 'scope',
      status: 'status',
      type: 'type',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      columns: 'string',
      conditions: 'string',
      eventBeginTime: 'number',
      eventCodes: 'string',
      eventEndTime: 'number',
      fileFormat: 'string',
      ossKey: 'string',
      scope: 'string',
      status: 'string',
      type: 'string',
      userId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAnalysisExportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Returned object
   */
  resultObject?: CreateAnalysisExportTaskResponseBodyResultObject;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resultObject: 'resultObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resultObject: CreateAnalysisExportTaskResponseBodyResultObject,
    };
  }

  validate() {
    if(this.resultObject && typeof (this.resultObject as any).validate === 'function') {
      (this.resultObject as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

