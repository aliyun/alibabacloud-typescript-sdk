// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAllSheetsResponseBodyValue } from "./GetAllSheetsResponseBodyValue";


export class GetAllSheetsResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  /**
   * @example
   * []
   */
  value?: GetAllSheetsResponseBodyValue[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      value: 'value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      value: { 'type': 'array', 'itemType': GetAllSheetsResponseBodyValue },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

