// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListDataSourceSharedRulesResponseBodyDataSourceSharedRules } from "./ListDataSourceSharedRulesResponseBodyDataSourceSharedRules";


export class ListDataSourceSharedRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The sharing rules of the data source.
   */
  dataSourceSharedRules?: ListDataSourceSharedRulesResponseBodyDataSourceSharedRules[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      dataSourceSharedRules: 'DataSourceSharedRules',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSourceSharedRules: { 'type': 'array', 'itemType': ListDataSourceSharedRulesResponseBodyDataSourceSharedRules },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataSourceSharedRules)) {
      $dara.Model.validateArray(this.dataSourceSharedRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

