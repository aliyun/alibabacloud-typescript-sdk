// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCustomLineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The code of the custom line.
   * 
   * @example
   * hra0yc-597
   */
  lineCode?: string;
  /**
   * @remarks
   * The unique ID of the custom line.
   * 
   * @example
   * 597
   */
  lineId?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * B57C121B-A45F-44D8-A9B2-13E5A5044195
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lineCode: 'LineCode',
      lineId: 'LineId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lineCode: 'string',
      lineId: 'number',
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

