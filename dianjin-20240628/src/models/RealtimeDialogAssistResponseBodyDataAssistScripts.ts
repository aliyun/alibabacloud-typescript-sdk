// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RealtimeDialogAssistResponseBodyDataAssistScripts extends $dara.Model {
  assistScript?: string;
  /**
   * @example
   * 1920005488515465216
   */
  intentCode?: string;
  /**
   * @example
   * null
   */
  intentLabels?: string;
  intentName?: string;
  isDefault?: boolean;
  static names(): { [key: string]: string } {
    return {
      assistScript: 'assistScript',
      intentCode: 'intentCode',
      intentLabels: 'intentLabels',
      intentName: 'intentName',
      isDefault: 'isDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      assistScript: 'string',
      intentCode: 'string',
      intentLabels: 'string',
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

