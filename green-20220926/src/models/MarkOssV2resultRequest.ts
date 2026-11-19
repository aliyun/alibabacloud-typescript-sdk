// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MarkOssV2ResultRequest extends $dara.Model {
  /**
   * @remarks
   * The end time. Specify the time in the YYYY-MM-DD HH:mm:ss format.
   * 
   * @example
   * 2023-10-21 16:08:38 +0800
   */
  endDate?: string;
  /**
   * @remarks
   * The freeze type. This parameter is required when Operation is set to freeze. Valid values:
   * - ACL: Modifies file permissions.
   * - COPY: Moves the file directory. Destination directory rules: 1. The file directory selected during task creation takes precedence. 2. If automatic freezing is not enabled during creation, or if ACL freezing is configured, the directory selected in the console during freezing is used. 3. The default directory is alicip_riskfile_backup/.
   * 
   * @example
   * ACL
   */
  freezeType?: string;
  /**
   * @remarks
   * The handling operation. Valid values:
   * - freeze: Freezes the object.
   * - unfreeze: Unfreezes the object.
   * - misreport: Reports a false positive.
   * - missOut: Reports a missed violation.
   * 
   * @example
   * freeze
   */
  operation?: string;
  /**
   * @remarks
   * The request IDs.
   * 
   * @example
   * AAAAAA-BBBB-CCCCC-DDDD-EEEEEEEE****
   */
  requestIds?: string;
  /**
   * @remarks
   * The start time. Specify the time in the YYYY-MM-DD HH:mm:ss format.
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
   * Image inventory task 20240914100517757
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

