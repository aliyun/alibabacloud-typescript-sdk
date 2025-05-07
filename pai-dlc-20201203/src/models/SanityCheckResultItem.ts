// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SanityCheckResultItem extends $dara.Model {
  /**
   * @example
   * 1
   */
  checkNumber?: number;
  /**
   * @example
   * ”2023-11-30T16:47:30.378817+08:00"
   */
  finishedAt?: string;
  message?: string;
  /**
   * @example
   * CheckInit
   */
  phase?: string;
  /**
   * @example
   * ”2023-11-30T16:47:30.343005+08:00“
   */
  startedAt?: string;
  /**
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

