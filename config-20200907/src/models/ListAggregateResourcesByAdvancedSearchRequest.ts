// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAggregateResourcesByAdvancedSearchRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * This parameter is required.
   * 
   * @example
   * ca-4b05626622af000c****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The SQL query statement.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT ResourceId, ResourceName WHERE Tags.Kvpair=\\"business:online\\"
   */
  sql?: string;
  static names(): { [key: string]: string } {
    return {
      aggregatorId: 'AggregatorId',
      sql: 'Sql',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aggregatorId: 'string',
      sql: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

