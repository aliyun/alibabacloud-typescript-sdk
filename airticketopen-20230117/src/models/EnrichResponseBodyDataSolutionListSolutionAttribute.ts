// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnrichResponseBodyDataSolutionListSolutionAttribute extends $dara.Model {
  /**
   * @example
   * 1
   */
  supplySourceType?: string;
  static names(): { [key: string]: string } {
    return {
      supplySourceType: 'supply_source_type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      supplySourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

