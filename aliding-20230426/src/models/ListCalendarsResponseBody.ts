// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListCalendarsResponseBodyResponse } from "./ListCalendarsResponseBodyResponse";


export class ListCalendarsResponseBody extends $dara.Model {
  /**
   * @remarks
   * requestId
   * 
   * @example
   * 0FAAEC9C-C6C8-5C87-AF8E-1195889BBXXX
   */
  requestId?: string;
  response?: ListCalendarsResponseBodyResponse;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      response: 'response',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      response: ListCalendarsResponseBodyResponse,
    };
  }

  validate() {
    if(this.response && typeof (this.response as any).validate === 'function') {
      (this.response as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

