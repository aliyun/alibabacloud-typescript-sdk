// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFlowResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information of the newly created product returned when the call succeeds.
   * 
   * @example
   * flow-9691a04fc7f94525aac1
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 32F02021-11D2-5196-BC85-72890E9AA090
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
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

