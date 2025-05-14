// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class AddHotlineNumberRequestOutboundRangeList extends $dara.Model {
  /**
   * @example
   * 123456
   */
  departmentId?: number;
  groupIdList?: number[];
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      groupIdList: 'GroupIdList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'number',
      groupIdList: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.groupIdList)) {
      $dara.Model.validateArray(this.groupIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

