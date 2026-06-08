// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ApplyResourceAccessPermissionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  applyContentsShrink?: string;
  /**
   * @example
   * ABFUOEUOTRTRJKE
   */
  clientToken?: string;
  /**
   * @remarks
   * This parameter is required.
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

