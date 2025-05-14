// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSeatInformationRequest extends $dara.Model {
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
   * 1
   */
  currentPage?: number;
  depIds?: number[];
  /**
   * @example
   * 1617761765000
   */
  endDate?: number;
  /**
   * @example
   * true
   */
  existDepartmentGrouping?: boolean;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * 1615083365000
   */
  startDate?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      currentPage: 'currentPage',
      depIds: 'depIds',
      endDate: 'endDate',
      existDepartmentGrouping: 'existDepartmentGrouping',
      pageSize: 'pageSize',
      startDate: 'startDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      endDate: 'number',
      existDepartmentGrouping: 'boolean',
      pageSize: 'number',
      startDate: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.depIds)) {
      $dara.Model.validateArray(this.depIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

