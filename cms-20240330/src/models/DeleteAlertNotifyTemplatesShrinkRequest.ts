// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertNotifyTemplatesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  alertNotifyTemplateIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      alertNotifyTemplateIdsShrink: 'alertNotifyTemplateIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertNotifyTemplateIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

