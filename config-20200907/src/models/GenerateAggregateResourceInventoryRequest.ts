// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GenerateAggregateResourceInventoryRequest extends $dara.Model {
  accountIds?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  aggregatorId?: string;
  regions?: string;
  resourceDeleted?: number;
  resourceTypes?: string;
  static names(): { [key: string]: string } {
    return {
      accountIds: 'AccountIds',
      aggregatorId: 'AggregatorId',
      regions: 'Regions',
      resourceDeleted: 'ResourceDeleted',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountIds: 'string',
      aggregatorId: 'string',
      regions: 'string',
      resourceDeleted: 'number',
      resourceTypes: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

