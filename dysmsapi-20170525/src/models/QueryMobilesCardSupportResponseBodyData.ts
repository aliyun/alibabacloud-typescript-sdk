// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMobilesCardSupportResponseBodyDataQueryResult } from "./QueryMobilesCardSupportResponseBodyDataQueryResult";


export class QueryMobilesCardSupportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of returned results.
   */
  queryResult?: QueryMobilesCardSupportResponseBodyDataQueryResult[];
  static names(): { [key: string]: string } {
    return {
      queryResult: 'QueryResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResult: { 'type': 'array', 'itemType': QueryMobilesCardSupportResponseBodyDataQueryResult },
    };
  }

  validate() {
    if(Array.isArray(this.queryResult)) {
      $dara.Model.validateArray(this.queryResult);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

