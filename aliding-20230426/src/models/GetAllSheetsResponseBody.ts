// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAllSheetsResponseBodyValue extends $dara.Model {
  /**
   * @example
   * stxxxx
   */
  id?: string;
  /**
   * @example
   * Sheet1
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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

