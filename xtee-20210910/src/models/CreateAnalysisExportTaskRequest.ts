// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAnalysisExportTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The language type for the request and response messages. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The custom columns.
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
   * The query expression.
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
   * The start time, in milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1752076800000
   */
  eventBeginTime?: number;
  /**
   * @remarks
   * The event code.
   * 
   * This parameter is required.
   * 
   * @example
   * de_afghcf6411
   */
  eventCodes?: string;
  /**
   * @remarks
   * The end time, in milliseconds (ms).
   * 
   * This parameter is required.
   * 
   * @example
   * 1753891199000
   */
  eventEndTime?: number;
  /**
   * @remarks
   * The field name.
   * 
   * @example
   * age
   */
  fieldName?: string;
  /**
   * @remarks
   * The field value.
   * 
   * @example
   * 20
   */
  fieldValue?: string;
  /**
   * @remarks
   * The file format. Valid values: Excel and CSV.
   * 
   * This parameter is required.
   * 
   * @example
   * CSV
   */
  fileFormat?: string;
  /**
   * @remarks
   * The region code.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  /**
   * @remarks
   * The export scope. Valid values:
   * - ALL: all data
   * - SELECT: selected rows.
   * 
   * This parameter is required.
   * 
   * @example
   * ALL
   */
  scope?: string;
  /**
   * @remarks
   * The query type. Valid values:
   * - BASIC: basic query
   * - ADVANCE: advanced query
   * - BATCH: batch query.
   * 
   * This parameter is required.
   * 
   * @example
   * BASIC
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      columns: 'columns',
      conditions: 'conditions',
      eventBeginTime: 'eventBeginTime',
      eventCodes: 'eventCodes',
      eventEndTime: 'eventEndTime',
      fieldName: 'fieldName',
      fieldValue: 'fieldValue',
      fileFormat: 'fileFormat',
      regId: 'regId',
      scope: 'scope',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      columns: 'string',
      conditions: 'string',
      eventBeginTime: 'number',
      eventCodes: 'string',
      eventEndTime: 'number',
      fieldName: 'string',
      fieldValue: 'string',
      fileFormat: 'string',
      regId: 'string',
      scope: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

