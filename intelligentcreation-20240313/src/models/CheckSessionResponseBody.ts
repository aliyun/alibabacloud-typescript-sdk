// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckSessionResponseBody extends $dara.Model {
  /**
   * @example
   * 5389BE87-571B-573C-90ED-F07C5E68760B
   */
  requestId?: string;
  /**
   * @example
   * FREE
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

