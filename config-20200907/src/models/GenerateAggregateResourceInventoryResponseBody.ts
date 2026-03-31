// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAggregateResourceInventoryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5111CBA6-6485-57EB-BCDD-85D8BB31E7A7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

