// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetExportTaskResponseBody extends $dara.Model {
  /**
   * @remarks
   * The task status. Valid values:
   * - success: The export is successful.
   * - exporting: The export is in progress.
   * 
   * @example
   * success
   */
  exportStatus?: string;
  /**
   * @remarks
   * The export type. Valid values:
   * - incident_list: incident list.
   * 
   * @example
   * incident_list
   */
  exportType?: string;
  /**
   * @remarks
   * The file name.
   * 
   * @example
   * event_1193842352994186_17344888****.xlsx
   */
  fileName?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1605076118000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The export task ID.
   * 
   * @example
   * 400185
   */
  id?: number;
  /**
   * @remarks
   * The download URL of the exported Excel file.
   * 
   * @example
   * https://cloud-siem-user-dataset.oss-cn-shanghai.aliyuncs.com/export_file/17661858******5/event_17661858******5_175748****.xlsx
   */
  link?: string;
  /**
   * @remarks
   * The export progress.
   * 
   * @example
   * 66
   */
  progress?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9AAA9ED9-78F4-5021-86DC-D51C7511****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      exportStatus: 'ExportStatus',
      exportType: 'ExportType',
      fileName: 'FileName',
      gmtCreate: 'GmtCreate',
      id: 'Id',
      link: 'Link',
      progress: 'Progress',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      exportStatus: 'string',
      exportType: 'string',
      fileName: 'string',
      gmtCreate: 'string',
      id: 'number',
      link: 'string',
      progress: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

