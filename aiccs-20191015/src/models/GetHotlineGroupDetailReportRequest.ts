// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHotlineGroupDetailReportRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614824972
   */
  endDate?: number;
  groupIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre-cn-***
   */
  instanceId?: string;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1614824872
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      endDate: 'EndDate',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

