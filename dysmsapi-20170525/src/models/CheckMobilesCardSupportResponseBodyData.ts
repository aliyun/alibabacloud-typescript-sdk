// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CheckMobilesCardSupportResponseBodyDataQueryResult } from "./CheckMobilesCardSupportResponseBodyDataQueryResult";


export class CheckMobilesCardSupportResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of returned results.
   */
  queryResult?: CheckMobilesCardSupportResponseBodyDataQueryResult[];
  static names(): { [key: string]: string } {
    return {
      queryResult: 'queryResult',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryResult: { 'type': 'array', 'itemType': CheckMobilesCardSupportResponseBodyDataQueryResult },
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

