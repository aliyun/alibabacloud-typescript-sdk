// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetProjectExportJobResponseBodyProjectExportJobExportResult } from "./GetProjectExportJobResponseBodyProjectExportJobExportResult";


export class GetProjectExportJobResponseBodyProjectExportJob extends $dara.Model {
  /**
   * @example
   * InvalidParameter
   */
  code?: string;
  exportResult?: GetProjectExportJobResponseBodyProjectExportJobExportResult;
  /**
   * @example
   * BaseTimeline
   */
  exportType?: string;
  /**
   * @example
   * ****cdb3e74639973036bc84****
   */
  jobId?: string;
  /**
   * @example
   * The specified parameter is not valid.
   */
  message?: string;
  /**
   * @example
   * ****fddd7748b58bf1d47e95****
   */
  projectId?: string;
  /**
   * @example
   * Success
   */
  status?: string;
  /**
   * @example
   * {"NotifyAddress":"http://xx.xx.xxx","Key":"Valuexxx"}
   */
  userData?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      exportResult: 'ExportResult',
      exportType: 'ExportType',
      jobId: 'JobId',
      message: 'Message',
      projectId: 'ProjectId',
      status: 'Status',
      userData: 'UserData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      exportResult: GetProjectExportJobResponseBodyProjectExportJobExportResult,
      exportType: 'string',
      jobId: 'string',
      message: 'string',
      projectId: 'string',
      status: 'string',
      userData: 'string',
    };
  }

  validate() {
    if(this.exportResult && typeof (this.exportResult as any).validate === 'function') {
      (this.exportResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

