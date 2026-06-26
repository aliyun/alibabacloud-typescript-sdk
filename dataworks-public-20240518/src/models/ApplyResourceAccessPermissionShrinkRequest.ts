// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyResourceAccessPermissionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of resource permission application contents.
   * 
   * This parameter is required.
   */
  applyContentsShrink?: string;
  /**
   * @remarks
   * The idempotency parameter. Used to prevent duplicate operations caused by multiple calls.
   * 
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * The reason for the application.
   * 
   * This parameter is required.
   * 
   * @example
   * 业务发展需要
   */
  reason?: string;
  static names(): { [key: string]: string } {
    return {
      applyContentsShrink: 'ApplyContents',
      clientToken: 'ClientToken',
      reason: 'Reason',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applyContentsShrink: 'string',
      clientToken: 'string',
      reason: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

