// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertRobotsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The chatbot ID.
   * 
   * This parameter is required.
   */
  robotIdsShrink?: string;
  /**
   * @remarks
   * The chatbot type.
   * 
   * @example
   * DING
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      robotIdsShrink: 'robotIds',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      robotIdsShrink: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

