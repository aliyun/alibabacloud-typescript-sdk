// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RealTimeDialogResponseBodyChoices } from "./RealTimeDialogResponseBodyChoices";


export class RealTimeDialogResponseBody extends $dara.Model {
  choices?: RealTimeDialogResponseBodyChoices[];
  /**
   * @example
   * 1735139569523
   */
  created?: string;
  /**
   * @example
   * eb2b6139-ddf1-91a0-a47f-df7617ae9032
   */
  id?: string;
  /**
   * @example
   * 5E3FBAF1-17AF-53B7-AF0A-CDCEEB6DE658
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      choices: 'choices',
      created: 'created',
      id: 'id',
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      choices: { 'type': 'array', 'itemType': RealTimeDialogResponseBodyChoices },
      created: 'string',
      id: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.choices)) {
      $dara.Model.validateArray(this.choices);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

