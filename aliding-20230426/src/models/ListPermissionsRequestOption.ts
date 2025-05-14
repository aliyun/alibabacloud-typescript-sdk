// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionsRequestOption extends $dara.Model {
  filterRoleIds?: string[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * 2
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      filterRoleIds: 'FilterRoleIds',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filterRoleIds: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filterRoleIds)) {
      $dara.Model.validateArray(this.filterRoleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

