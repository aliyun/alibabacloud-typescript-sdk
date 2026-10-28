// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertActionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The unique identifiers of the alert action integrations to delete.
   * 
   * This parameter is required.
   */
  alertActionIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      alertActionIdsShrink: 'alertActionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertActionIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

