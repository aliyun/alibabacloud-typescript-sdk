// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeHALogsResponseBodyHaLogItems extends $dara.Model {
  /**
   * @remarks
   * The reason code of the failover.
   * 
   * @example
   * Platform.Ha.AuroraService.ManualOperations
   */
  switchCauseCode?: string;
  /**
   * @remarks
   * The reason of the failover.
   * 
   * @example
   * Platform.Ha.ManuallyTriggered
   */
  switchCauseDetail?: string;
  /**
   * @remarks
   * The time when the failover ended.
   * 
   * @example
   * 2025-05-20T03:09:56Z
   */
  switchFinishTime?: string;
  /**
   * @example
   * e571f897-9b3c-4012-9470-88333832dec4
   */
  switchId?: string;
  /**
   * @remarks
   * The time when the failover started.
   * 
   * @example
   * 2025-05-20T03:09:45Z
   */
  switchStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      switchCauseCode: 'SwitchCauseCode',
      switchCauseDetail: 'SwitchCauseDetail',
      switchFinishTime: 'SwitchFinishTime',
      switchId: 'SwitchId',
      switchStartTime: 'SwitchStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      switchCauseCode: 'string',
      switchCauseDetail: 'string',
      switchFinishTime: 'string',
      switchId: 'string',
      switchStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

