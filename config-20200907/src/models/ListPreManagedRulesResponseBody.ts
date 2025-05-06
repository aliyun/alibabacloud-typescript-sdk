// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListPreManagedRulesResponseBodyManagedRules } from "./ListPreManagedRulesResponseBodyManagedRules";


export class ListPreManagedRulesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The evaluation rules.
   */
  managedRules?: ListPreManagedRulesResponseBodyManagedRules[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A2A9F1BE-0712-1B26-9899-D82F7DA8476C
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      managedRules: 'ManagedRules',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      managedRules: { 'type': 'array', 'itemType': ListPreManagedRulesResponseBodyManagedRules },
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.managedRules)) {
      $dara.Model.validateArray(this.managedRules);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

