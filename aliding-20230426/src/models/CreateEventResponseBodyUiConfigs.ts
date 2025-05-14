// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEventResponseBodyUiConfigs extends $dara.Model {
  /**
   * @example
   * updateEventButton
   */
  uiName?: string;
  /**
   * @example
   * hide
   */
  uiStatus?: string;
  static names(): { [key: string]: string } {
    return {
      uiName: 'UiName',
      uiStatus: 'UiStatus',
    };
  }

  static types(): { [key: string]: any } {
    return {
      uiName: 'string',
      uiStatus: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

