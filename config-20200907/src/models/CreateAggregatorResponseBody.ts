// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggregatorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The account group ID.
   * 
   * @example
   * ca-dacf86d8314e00eb****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8195B664-9565-4685-89AC-8B5F04B44B92
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
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

