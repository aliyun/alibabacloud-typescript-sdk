// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCustomLineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * @example
   * 1065001
   */
  lineId?: string;
  /**
   * @remarks
   * The name of the custom line.
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AF7D4DCE-0776-47F2-A9B2-6FB85A87AA60
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lineId: 'LineId',
      name: 'Name',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineId: 'string',
      name: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

