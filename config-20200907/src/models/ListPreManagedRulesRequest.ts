// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPreManagedRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The page number.
   * 
   * The value starts from 1. The default value is 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * The default value is 10.
   * 
   * @example
   * 1
   */
  pageSize?: number;
  /**
   * @remarks
   * A list of resource types.
   */
  resourceTypes?: string[];
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      resourceTypes: 'ResourceTypes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      resourceTypes: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceTypes)) {
      $dara.Model.validateArray(this.resourceTypes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

