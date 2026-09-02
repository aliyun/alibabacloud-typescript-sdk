// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateStatusReason } from "./PublicTemplateStatusReason";


export class PublicTemplateStatus extends $dara.Model {
  /**
   * @remarks
   * The time when the build is completed.
   * 
   * @example
   * 2026-08-28T12:00:00.000Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The reason for the build failure.
   */
  reason?: PublicTemplateStatusReason;
  /**
   * @remarks
   * The build status.
   * 
   * @example
   * ready
   */
  state?: string;
  static names(): { [key: string]: string } {
    return {
      finishedAt: 'finishedAt',
      reason: 'reason',
      state: 'state',
    };
  }

  static types(): { [key: string]: any } {
    return {
      finishedAt: 'string',
      reason: PublicTemplateStatusReason,
      state: 'string',
    };
  }

  validate() {
    if(this.reason && typeof (this.reason as any).validate === 'function') {
      (this.reason as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

