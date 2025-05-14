// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RealtimeDialogAssistResponseBodyDataAssistSop extends $dara.Model {
  /**
   * @example
   * XXX
   */
  assistSop?: string;
  /**
   * @example
   * XXX
   */
  intentCode?: string;
  /**
   * @example
   * XXX
   */
  intentName?: string;
  isDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      assistSop: 'assistSop',
      intentCode: 'intentCode',
      intentName: 'intentName',
      isDefault: 'isDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistSop: 'string',
      intentCode: 'string',
      intentName: 'string',
      isDefault: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

