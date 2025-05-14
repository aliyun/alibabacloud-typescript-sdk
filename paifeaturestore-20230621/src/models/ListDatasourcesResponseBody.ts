// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDatasourcesResponseBodyDatasources } from "./ListDatasourcesResponseBodyDatasources";


export class ListDatasourcesResponseBody extends $dara.Model {
  datasources?: ListDatasourcesResponseBodyDatasources[];
  /**
   * @example
   * 44933189-493B-5C43-A5C6-11EEC2A43520
   */
  requestId?: string;
  /**
   * @example
   * 10
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      datasources: 'Datasources',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datasources: { 'type': 'array', 'itemType': ListDatasourcesResponseBodyDatasources },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.datasources)) {
      $dara.Model.validateArray(this.datasources);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

