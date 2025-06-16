// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetNatGatewayAttributeResponseBodyForwardTable extends $dara.Model {
  /**
   * @remarks
   * The number of DNAT entries.
   * 
   * @example
   * 1
   */
  forwardEntryCount?: number;
  /**
   * @remarks
   * The ID of the DNAT table.
   * 
   * @example
   * ftb-uf6gj3mhsg94qsqst****
   */
  forwardTableId?: string;
  static names(): { [key: string]: string } {
    return {
      forwardEntryCount: 'ForwardEntryCount',
      forwardTableId: 'ForwardTableId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      forwardEntryCount: 'number',
      forwardTableId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

