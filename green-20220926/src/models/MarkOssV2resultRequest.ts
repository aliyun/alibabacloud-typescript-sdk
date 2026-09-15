// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MarkOssV2ResultRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. The time format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-10-21 16:08:38 +0800
   */
  endDate?: string;
  /**
   * @remarks
   * The freeze type. This parameter is required when Operation is set to freeze. Valid values:
   * - ACL: Modify file permissions.
   * - COPY: Move the file directory. Description of the destination directory: 1. The file directory selected when the task was created takes priority. 2. If automatic freezing was not enabled during creation, or ACL freezing was configured, the directory selected during freezing in the console is used. 3. The default directory is alicip_riskfile_backup/.
   * 
   * @example
   * ACL
   */
  freezeType?: string;
  /**
   * @remarks
   * The processing operation. Valid values:
   * 
   * - freeze: Freeze.
   * - unfreeze: Unfreeze.
   * - misreport: Non-violation false positive.
   * - missOut: Violation missed.
   * 
   * @example
   * freeze
   */
  operation?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestIds?: string;
  /**
   * @remarks
   * The start time. The time format is YYYY-MM-DD HH:mm:ss.
   * 
   * @example
   * 2023-08-21 16:08:38 +0800
   */
  startDate?: string;
  /**
   * @remarks
   * The task name.
   * 
   * @example
   * Image stock task 20240914100517757
   */
  taskName?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      freezeType: 'FreezeType',
      operation: 'Operation',
      requestIds: 'RequestIds',
      startDate: 'StartDate',
      taskName: 'TaskName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      freezeType: 'string',
      operation: 'string',
      requestIds: 'string',
      startDate: 'string',
      taskName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

