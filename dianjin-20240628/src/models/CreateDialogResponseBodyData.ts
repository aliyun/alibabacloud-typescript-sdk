// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDialogResponseBodyData extends $dara.Model {
  openingRemarks?: string;
  /**
   * @example
   * 1728545917713234
   */
  sessionId?: string;
  static names(): { [key: string]: string } {
    return {
      openingRemarks: 'openingRemarks',
      sessionId: 'sessionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      openingRemarks: 'string',
      sessionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

