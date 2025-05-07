// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDefenseResourceGroupNamesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The names of the protected object groups.
   */
  groupNames?: string[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 59DA4258-2F32-5095-B283-57AC****70B3
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 8
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      groupNames: 'GroupNames',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupNames: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.groupNames)) {
      $dara.Model.validateArray(this.groupNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

