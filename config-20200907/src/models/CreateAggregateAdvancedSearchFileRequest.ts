// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAggregateAdvancedSearchFileRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the account group.
   * 
   * For more information about how to obtain the ID of an account group, see [ListAggregators](https://help.aliyun.com/document_detail/255797.html).
   * 
   * This parameter is required.
   * 
   * @example
   * ca-edd3626622af00b3****
   */
  aggregatorId?: string;
  /**
   * @remarks
   * The SQL statement used to query resources.
   * 
   * This parameter is required.
   * 
   * @example
   * SELECT * WHERE ResourceType = \\"ACS::ECS::Instance\\"
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

