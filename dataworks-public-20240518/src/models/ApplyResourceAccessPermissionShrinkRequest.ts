// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyResourceAccessPermissionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The list of resource permission applications.
   * 
   * This parameter is required.
   */
  applyContentsShrink?: string;
  /**
   * @remarks
   * The idempotency token used to prevent duplicate operations caused by multiple calls.
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
   * Business development requirements
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

