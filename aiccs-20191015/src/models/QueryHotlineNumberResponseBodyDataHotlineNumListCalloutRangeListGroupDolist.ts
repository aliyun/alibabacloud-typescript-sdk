// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryHotlineNumberResponseBodyDataHotlineNumListCalloutRangeListGroupDOList extends $dara.Model {
  /**
   * @example
   * 6083****
   */
  groupId?: number;
  groupName?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      groupName: 'GroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'number',
      groupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

