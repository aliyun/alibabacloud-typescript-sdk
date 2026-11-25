// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddRobotToScenegroupRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cidt*****Xa4K10w==
   */
  openConversationId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * dingxxxxxxxxxxxx
   */
  robotCode?: string;
  static names(): { [key: string]: string } {
    return {
      openConversationId: 'OpenConversationId',
      robotCode: 'RobotCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openConversationId: 'string',
      robotCode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

