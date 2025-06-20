// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateFilterRequest extends $dara.Model {
  /**
   * @remarks
   * The configurations of the filter.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *   "regions": [],
   *   "tagFilters": [
   *     [{ "type": "notContainTagKey", "tagKey": "xxx", "tagValue": "" }],
   *     [{ "tagKey": "xxx", "tagValue": "xxx" }]
   *   ],
   *   "resourceTypes": [
   *     "ACS::ECS::AutoSnapshotPolicy"
   *   ]
   * }
   */
  filterConfiguration?: string;
  /**
   * @remarks
   * The name of the filter.
   * 
   * This parameter is required.
   * 
   * @example
   * ECS
   */
  filterName?: string;
  static names(): { [key: string]: string } {
    return {
      filterConfiguration: 'FilterConfiguration',
      filterName: 'FilterName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterConfiguration: 'string',
      filterName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

