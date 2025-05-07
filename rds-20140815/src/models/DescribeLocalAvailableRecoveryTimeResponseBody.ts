// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLocalAvailableRecoveryTimeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-uf6wjk5xxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The start of the time range to which the instance can be restored.
   * 
   * @example
   * 2020-03-16T07:59:18Z
   */
  recoveryBeginTime?: string;
  /**
   * @remarks
   * The end of the time range to which the instance can be restored.
   * 
   * @example
   * 2020-03-20T08:41:29Z
   */
  recoveryEndTime?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 14E986AC-0F27-4FFB-8EED-9A8A3A2A0309
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

