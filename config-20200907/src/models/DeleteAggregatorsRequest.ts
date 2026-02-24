// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAggregatorsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aggregatorIds?: string;
  clientToken?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorIds: 'AggregatorIds',
      clientToken: 'ClientToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorIds: 'string',
      clientToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

