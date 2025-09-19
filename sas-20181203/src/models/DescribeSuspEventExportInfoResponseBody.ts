// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventExportInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The handling status for the exception. Valid values:
   * 
   * *   **exporting**: in progress
   * *   **success**: successful
   * *   **failed**: failed
   * *   **pending**: pending
   * 
   * @example
   * success
   */
  exportStatus?: string;
  /**
   * @remarks
   * The name of the exported file.
   * 
   * @example
   * suspicious_event_20221221_1671590521234.zip
   */
  fileName?: string;
  /**
   * @remarks
   * The time when the export task was created.
   * 
   * @example
   * 2022-12-20T15:18Z
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The time when the export task was modified.
   * 
   * @example
   * 2022-12-20T15:18Z
   */
  gmtModified?: number;
  /**
   * @remarks
   * The ID of the export task.
   * 
   * @example
   * 11
   */
  id?: number;
  /**
   * @remarks
   * The URL at which you can download the exported Excel file.
   * 
   * @example
   * http://suspicious-xxxxxxx.oss-cn-shanghai.aliyuncs.com/xxxxxxxxxxx/suspicious_event_20221221_1671590525269.zip?Expires=1671594125&OSSAccessKeyId=yourAccessKeyID&Signature=xxxxxxxxxxxxxxxxxx
   */
  link?: string;
  /**
   * @remarks
   * The progress percentage of the export task.
   * 
   * @example
   * 100
   */
  progress?: number;
  /**
   * @remarks
   * The exported parameters of exceptions.
   * 
   * @example
   * id,eventSubType,eventDetail,level,status,ip,instanceName,desc,lastTime,operateTime,note
   */
  properties?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * BE120DAB-F4E7-4C53-ADC3-A97578AXXXXX
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of exceptions exported.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The type of the export task. The value is fixed as suspiciousEvent.
   * 
   * @example
   * suspiciousEvent
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      exportStatus: 'ExportStatus',
      fileName: 'FileName',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      link: 'Link',
      progress: 'Progress',
      properties: 'Properties',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportStatus: 'string',
      fileName: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      id: 'number',
      link: 'string',
      progress: 'number',
      properties: 'string',
      requestId: 'string',
      totalCount: 'number',
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

