// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RepeatNotifySetting extends $dara.Model {
  /**
   * @example
   * "Resolved"
   */
  endIncidentState?: string;
  /**
   * @example
   * 5
   */
  repeatInterval?: string;
  static names(): { [key: string]: string } {
    return {
      endIncidentState: 'endIncidentState',
      repeatInterval: 'repeatInterval',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endIncidentState: 'string',
      repeatInterval: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

