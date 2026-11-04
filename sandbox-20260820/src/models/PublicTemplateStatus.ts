// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { PublicTemplateStatusReason } from "./PublicTemplateStatusReason";


export class PublicTemplateStatus extends $dara.Model {
  /**
   * @remarks
   * The time when the template reached the current desired state, in UTC and RFC 3339 format. This parameter is empty when the template is still being built or updated.
   * 
   * @example
   * 2026-08-20T08:35:12Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The reason why the template entered a failure state. This parameter is returned only when state is error or updateFailed.
   */
  reason?: PublicTemplateStatusReason;
  /**
   * @remarks
   * The template status. Valid values:
   * - building: The template is being built.
   * - ready: The template is active.
   * - updating: The template is being updated.
   * - updateFailed: The template failed to be updated.
   * - error: The template failed to be built.
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

