// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAlertRobotsRequest extends $dara.Model {
  /**
   * @remarks
   * The chatbot ID.
   * 
   * This parameter is required.
   */
  robotIds?: string[];
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
      robotIds: 'robotIds',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      robotIds: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.robotIds)) {
      $dara.Model.validateArray(this.robotIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

