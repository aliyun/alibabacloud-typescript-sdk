// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAgentIndexRealTimeRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  currentPage?: number;
  depIds?: number[];
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
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      depIds: 'DepIds',
      groupIds: 'GroupIds',
      instanceId: 'InstanceId',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      depIds: { 'type': 'array', 'itemType': 'number' },
      groupIds: { 'type': 'array', 'itemType': 'number' },
      instanceId: 'string',
      pageSize: 'number',
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

