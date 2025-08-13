// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteEventFieldResponseBody extends $dara.Model {
  /**
   * @remarks
   * ID of the request
   * 
   * @example
   * A32FE941-35F2-5378-B37C-4B8FDB16F094
   */
  requestId?: string;
  /**
   * @remarks
   * Result object
   * 
   * @example
   * true
   */
  resuleObject?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resuleObject: 'resuleObject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resuleObject: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

