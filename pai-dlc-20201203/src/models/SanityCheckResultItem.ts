// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SanityCheckResultItem extends $dara.Model {
  /**
   * @remarks
   * The nth time the check is performed.
   * 
   * @example
   * 1
   */
  checkNumber?: number;
  /**
   * @remarks
   * The time when the check ends.
   * 
   * @example
   * 2023-11-30T16:47:30.378817+08:00
   */
  finishedAt?: string;
  /**
   * @remarks
   * The detailed information about the check results.
   */
  message?: string;
  /**
   * @remarks
   * The check phase.
   * 
   * @example
   * CheckInit
   */
  phase?: string;
  /**
   * @remarks
   * The time when the check starts.
   * 
   * @example
   * 2023-11-30T16:47:30.343005+08:00
   */
  startedAt?: string;
  /**
   * @remarks
   * The check status.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      checkNumber: 'CheckNumber',
      finishedAt: 'FinishedAt',
      message: 'Message',
      phase: 'Phase',
      startedAt: 'StartedAt',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkNumber: 'number',
      finishedAt: 'string',
      message: 'string',
      phase: 'string',
      startedAt: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

