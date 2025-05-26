// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetUserResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Whether EventBridge is enabled
   * 
   * @example
   * true
   */
  enableEventbridge?: boolean;
  static names(): { [key: string]: string } {
    return {
      enableEventbridge: 'EnableEventbridge',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableEventbridge: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

