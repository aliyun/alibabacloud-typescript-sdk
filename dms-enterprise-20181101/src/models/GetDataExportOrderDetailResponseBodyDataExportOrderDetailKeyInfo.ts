// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDataExportOrderDetailResponseBodyDataExportOrderDetailKeyInfo extends $dara.Model {
  /**
   * @remarks
   * Export task ID.
   * 
   * @example
   * 1385****
   */
  jobId?: number;
  /**
   * @remarks
   * The state of the data export ticket. Valid values:
   * 
   * *   **PRE_CHECKING**: The ticket was being prechecked.
   * *   **PRE_CHECK_SUCCESS**: The ticket passed the precheck.
   * *   **PRE_CHECK_FAIL**: The ticket failed to pass the prechecked.
   * *   **WAITING_APPLY_AUDIT**: The ticket was to be submitted for approval.
   * *   **APPLY_AUDIT_SUCCESS**: The ticket was submitted for approval.
   * *   **ENABLE_EXPORT**: The ticket was approved. Data can be exported.
   * *   **WAITING_EXPORT**: Data was to be scheduled for export.
   * *   **DOING_EXPORT**: Data was being exported.
   * *   **EXPORT_FAIL**: Data failed to be exported.
   * *   **EXPORT_SUCCESS**: Data was exported.
   * 
   * @example
   * EXPORT_SUCCESS
   */
  jobStatus?: string;
  /**
   * @remarks
   * The precheck ID.
   * 
   * @example
   * 123
   */
  preCheckId?: number;
  static names(): { [key: string]: string } {
    return {
      jobId: 'JobId',
      jobStatus: 'JobStatus',
      preCheckId: 'PreCheckId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jobId: 'number',
      jobStatus: 'string',
      preCheckId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

