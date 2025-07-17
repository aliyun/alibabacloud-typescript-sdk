// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteIMRobotRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the IM chatbot.
   * 
   * This parameter is required.
   * 
   * @example
   * 123
   */
  robotId?: number;
  static names(): { [key: string]: string } {
    return {
      robotId: 'RobotId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      robotId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

