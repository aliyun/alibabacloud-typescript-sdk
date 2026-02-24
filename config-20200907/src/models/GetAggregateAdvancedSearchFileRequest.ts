// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateAdvancedSearchFileRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  aggregatorId?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

