// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SanityCheckResultItem extends $dara.Model {
  /**
   * @remarks
   * The check number.
   * 
   * @example
   * 1
   */
  checkNumber?: number;
  /**
   * @remarks
   * The check end time.
   * 
   * @example
   * 2023-11-30T16:47:30.378817+08:00
   */
  finishedAt?: string;
  /**
   * @remarks
   * The check result details.
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
   * The check start time.
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

