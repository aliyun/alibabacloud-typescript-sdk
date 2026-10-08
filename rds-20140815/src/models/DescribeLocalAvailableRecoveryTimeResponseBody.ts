// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLocalAvailableRecoveryTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp1f****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The start time of the restorable time range for backups.
   * 
   * @example
   * 2023-09-11T09:48:52Z
   */
  recoveryBeginTime?: string;
  /**
   * @remarks
   * The end time of the restorable time range for backups.
   * 
   * @example
   * 2023-09-18T08:03:09Z
   */
  recoveryEndTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 291534CC-922B-55D5-8657-B29****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      recoveryBeginTime: 'RecoveryBeginTime',
      recoveryEndTime: 'RecoveryEndTime',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      recoveryBeginTime: 'string',
      recoveryEndTime: 'string',
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

