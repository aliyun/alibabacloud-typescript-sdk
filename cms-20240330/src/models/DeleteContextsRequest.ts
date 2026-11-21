// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteContextsRequest extends $dara.Model {
  /**
   * @remarks
   * A comma-separated list of context IDs. This parameter can only be specified as a query parameter.
   * 
   * @example
   * mem_long_01,mem_long_02
   */
  contextIds?: string;
  /**
   * @remarks
   * The filter conditions. The syntax is the same as that of SearchContext.filter. This parameter is passed as a JSON string in the query.
   * 
   * @example
   * {"userId":"u-10001"}
   */
  filter?: string;
  static names(): { [key: string]: string } {
    return {
      contextIds: 'contextIds',
      filter: 'filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contextIds: 'string',
      filter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

